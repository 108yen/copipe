import { cache } from "react"
import { prisma } from "../db"
import { copipeWithTag } from "../query"

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
