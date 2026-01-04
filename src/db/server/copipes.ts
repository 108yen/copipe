import { cacheLife } from "next/cache"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"
import { notFound } from "next/navigation"
import { prisma } from "../db"
import { copipeWithTag } from "../query"

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
  "use cache: remote"
  cacheTag("recent-copipes")
  cacheLife("weeks")

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
  "use cache: remote"
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
  "use cache: remote"
  cacheLife("max")

  const copipe = await prisma.copipe
    .findUniqueOrThrow({
      select: copipeWithTag,
      where: { id: id },
    })
    .catch(() => {
      notFound()
    })
  console.log(`get copipe in archives/${id}`)

  return copipe
}

export type GetHomePageCopipeReturn = ReturnType<typeof getHomePageCopipe>

export async function fetchCopipeComment(id: number) {
  "use cache: remote"
  cacheLife("default")

  const comments = await prisma.comments
    .findMany({
      where: { copipe_id: id },
    })
    .catch(() => notFound())

  return comments
}

export async function getCopipeIds() {
  "use cache: remote"
  cacheLife("max")

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
