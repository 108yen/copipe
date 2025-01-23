import { unstable_cacheTag } from "next/cache"
import { notFound } from "next/navigation"

import { prisma } from "../db"
import { copipeWithTag, copipeWithTagComment } from "../query"

export async function getHomePageCopipe() {
  "use cache"
  const [copipes, count] = await prisma.$transaction([
    prisma.copipe.findMany({
      orderBy: {
        id: "desc",
      },
      select: copipeWithTag,
      take: 10,
    }),
    prisma.copipe.count(),
  ])

  return { copipes, count }
}

//NOTE: recent copipe is not important. No problem if `unstable_cache` is broken.
//
// export const fetchRecentCopipes = cache(async () => {
//   const copipes = await prisma.copipe.findMany({
//     select: {
//       id: true,
//       title: true,
//     },
//     take: 100,
//     orderBy: { id: "desc" },
//   })
//   console.log("get recent copipes")
//
//   const result: { id: number; title: string }[] = copipes.map((value) => {
//     return {
//       id: value.id,
//       title: value.title!,
//     }
//   })
//
//   return result
// })
export async function fetchRecentCopipes() {
  "use cache"
  unstable_cacheTag("recent_copipes")

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

export async function fetchTagCopipes(tagId: number, page: number) {
  "use cache"
  const tagQuery = {
    copipeToTag: {
      some: {
        tag_id: tagId,
      },
    },
  }

  const result = await prisma.$transaction([
    prisma.copipe.findMany({
      orderBy: { id: "desc" },
      select: copipeWithTag,
      skip: (page - 1) * 10,
      take: 10,
      where: tagQuery,
    }),
    prisma.copipe.count({
      where: tagQuery,
    }),
  ])
  console.log(`get copipes tagId:${tagId} page:${page}`)

  return result
}

export async function fetchSearchCopipes(searchText: string, page: number) {
  "use cache"
  const searchQuery =
    searchText == ""
      ? {}
      : {
          body: {
            contains: searchText,
          },
        }

  const result = await prisma.$transaction([
    prisma.copipe.findMany({
      orderBy: { id: "desc" },
      select: copipeWithTag,
      skip: (page - 1) * 10,
      take: 10,
      where: searchQuery,
    }),
    prisma.copipe.count({
      where: searchQuery,
    }),
  ])

  console.log(`get copipes search:${searchText} page:${page}`)

  return result
}

export async function fetchCopipe(id: number) {
  "use cache"
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

export async function getCopipeIds() {
  "use cache"
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
