import { Tag } from "@/models/tag"
import { unstable_cache } from "next/cache"
import { notFound } from "next/navigation"
import { prisma } from "../db"

export const fetchTags = unstable_cache(
  async function () {
    const tags = await prisma.tag.findMany()

    console.log("get tag list")

    const result: Tag[] = tags.map((tag) => {
      return {
        body: tag.body,
        created_at: new Date(tag.created_at),
        id: tag.id,
      }
    })

    return result
  },
  ["tags"],
)

export type FetchTagsReturn = ReturnType<typeof fetchTags>

export const fetchTag = unstable_cache(
  async function (id: number) {
    const tag = await prisma.tag
      .findUniqueOrThrow({
        select: { body: true },
        where: { id },
      })
      .catch(() => {
        notFound()
      })
    return tag
  },
  ["tag"],
)

export type FetchTagReturn = ReturnType<typeof fetchTag>
