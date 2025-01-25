import { Tag } from "@/models/tag"
import { unstable_cacheLife as cacheLife } from "next/cache"
import { notFound } from "next/navigation"

import { prisma } from "../db"

export async function fetchTags() {
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

export async function fetchTag(id: number) {
  "use cache"
  cacheLife("max")

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
