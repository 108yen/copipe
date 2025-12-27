import "server-only"
import { cacheLife, cacheTag } from "next/cache"
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

export type FetchCopipeReturn = ReturnType<typeof fetchCopipe>

export async function fetchRecentCopipes() {
  "use cache"
  cacheTag("recent-copipes")

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
}

export type FetchRecentCopipesReturn = ReturnType<typeof fetchRecentCopipes>

export async function fetchTagCopipes(tagId: number, page: number) {
  "use cache"
  cacheTag("tag-copipes")

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
}

export type FetchSearchCopipes = ReturnType<typeof fetchSearchCopipes>

export async function fetchSearchCopipes(searchText: string, page: number) {
  "use cache"
  cacheTag("search-copipes")

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

export async function fetchCopipe(id: number) {
  "use cache"
  cacheTag("copipe")
  cacheLife("minutes")

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
}

export type GetHomePageCopipeReturn = ReturnType<typeof getHomePageCopipe>

export async function getCopipeIds() {
  "use cache"
  cacheTag("copipe-ids")

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
