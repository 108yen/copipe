import { unstable_cache } from "next/cache"
import { notFound } from "next/navigation"
import { prisma } from "../db"
import { copipeWithTag, copipeWithTagComment } from "../query"

export async function getHomePageCopipe() {
  const [copipes, count] = await prisma.copipe.findManyAndCount({
    orderBy: {
      id: "desc",
    },
    select: copipeWithTag,
    take: 10,
  })

  return { copipes, count }
}

export type GetHomePageCopipeReturn = ReturnType<typeof getHomePageCopipe>

export const fetchRecentCopipes = unstable_cache(
  async function () {
    const copipes = await prisma.copipe.findMany({
      orderBy: { id: "desc" },
      select: {
        id: true,
        title: true,
      },
      take: 100,
    })
    console.log("get recent copipes")

    const result: { id: number; title: string }[] = copipes.map((value) => {
      return {
        id: value.id,
        title: value.title!,
      }
    })

    return result
  },
  ["recent-copipes"],
)

export type FetchRecentCopipesReturn = ReturnType<typeof fetchRecentCopipes>

export const fetchTagCopipes = unstable_cache(
  async function (tagId: number, page: number) {
    const tagQuery = {
      copipeToTag: {
        some: {
          tag_id: tagId,
        },
      },
    }

    const result = await prisma.copipe.findManyAndCount({
      orderBy: { id: "desc" },
      select: copipeWithTag,
      skip: (page - 1) * 10,
      take: 10,
      where: tagQuery,
    })

    console.log(`get copipes tagId:${tagId} page:${page}`)

    return result
  },
  ["tag-copipes"],
)

export type FetchSearchCopipes = ReturnType<typeof fetchSearchCopipes>

export async function fetchSearchCopipes(searchText: string, page: number) {
  const searchQuery =
    searchText == ""
      ? {}
      : {
          body: {
            contains: searchText,
          },
        }

  const result = await prisma.copipe.findManyAndCount({
    orderBy: { id: "desc" },
    select: copipeWithTag,
    skip: (page - 1) * 10,
    take: 10,
    where: searchQuery,
  })

  console.log(`get copipes search:${searchText} page:${page}`)

  return result
}

export type FetchTagCopipes = ReturnType<typeof fetchTagCopipes>

export const fetchCopipe = unstable_cache(
  async function (id: number) {
    const copipe = await prisma.copipe
      .findUniqueOrThrow({
        select: copipeWithTagComment,
        where: { id: id },
      })
      .catch(() => {
        notFound()
      })
    console.log(`get copipe in archives/${id}`)

    return copipe
  },
  ["copipe"],
  { revalidate: 20 },
)

export type FetchCopipeReturn = ReturnType<typeof fetchCopipe>

export async function getCopipeIds() {
  const ids = await prisma.copipe
    .findMany({
      select: {
        id: true,
      },
    })
    .catch((error) => {
      console.log(
        `fetch copipe_id for pagination in archives/[id] error: ${error}`,
      )
    })
  console.log(`fetch copipe_id for pagination in archives/[id]`)

  return ids!
}

export async function fetchAdminCopipes(page: number) {
  return await prisma
    .$transaction([
      prisma.copipe.findMany({
        orderBy: { id: "desc" },
        select: copipeWithTag,
        skip: (page - 1) * 100,
        take: 100,
      }),
      prisma.copipe.count(),
      prisma.tag.findMany(),
    ])
    .catch(() => notFound())
}
