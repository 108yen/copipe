import { cacheTag } from "next/cache"
import { notFound } from "next/navigation"
import { Tag } from "@/models/tag"
import { prisma } from "../db"

export async function fetchTags() {
  "use cache: remote"
  cacheTag("tags")

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
}

export type FetchTagReturn = ReturnType<typeof fetchTag>

export async function fetchTag(id: number) {
  "use cache: remote"
  cacheTag("tag")

  const tag = await prisma.tag
    .findUniqueOrThrow({
      select: { body: true },
      where: { id },
    })
    .catch(() => {
      notFound()
    })
  return tag
}

export type FetchTagsReturn = ReturnType<typeof fetchTags>
