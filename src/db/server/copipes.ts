import { cache } from "react"
import { prisma } from "../db"
import { copipeWithTag, copipeWithTagComment } from "../query"
import { notFound } from "next/navigation"

export const getHomePageCopipe = cache(async () => {
  const [copipes, count] = await prisma.$transaction([
    prisma.copipe.findMany({
      select: copipeWithTag,
      take: 10,
      orderBy: {
        id: "desc",
      },
    }),
    prisma.copipe.count(),
  ])

  return { copipes, count }
})

export const fetchRecentCopipes = cache(async () => {
  const copipes = await prisma.copipe.findMany({
    select: {
      id: true,
      title: true,
    },
    take: 100,
    orderBy: { id: "desc" },
  })
  console.log("get recent copipes")

  const result: { id: number; title: string }[] = copipes.map((value) => {
    return {
      id: value.id,
      title: value.title!,
    }
  })

  return result
})

export const fetchTagCopipes = cache(async (tagId: number, page: number) => {
  const tagQuery = {
    copipeToTag: {
      some: {
        tag_id: tagId,
      },
    },
  }

  const result = await prisma.$transaction([
    prisma.copipe.findMany({
      where: tagQuery,
      select: copipeWithTag,
      take: 10,
      skip: (page - 1) * 10,
      orderBy: { id: "desc" },
    }),
    prisma.copipe.count({
      where: tagQuery,
    }),
  ])
  console.log(`get copipes tagId:${tagId} page:${page}`)

  return result
})

export const fetchSearchCopipes = cache(
  async (searchText: string, page: number) => {
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
        where: searchQuery,
        select: copipeWithTag,
        take: 10,
        skip: (page - 1) * 10,
        orderBy: { id: "desc" },
      }),
      prisma.copipe.count({
        where: searchQuery,
      }),
    ])
    console.log(`get copipes search:${searchText} page:${page}`)

    return result
  },
)

export const fetchCopipe = cache(async (id: number) => {
  const copipe = await prisma.copipe
    .findUniqueOrThrow({
      where: { id: id },
      select: copipeWithTagComment,
    })
    .catch(() => {
      notFound()
    })
  console.log(`get copipe in archives/${id}`)

  return copipe
})

export const getCopipeIds = cache(async () => {
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
})
