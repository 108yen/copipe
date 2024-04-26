import { cache } from "react"
import { prisma } from "../db"
import { Tag } from "@/models/tag"

export const fetchTags = cache(async () => {
  const tags = await prisma.tag.findMany()
  console.log("tag get")

  const result: Tag[] = tags.map((tag) => {
    return {
      id: tag.id,
      created_at: new Date(tag.created_at),
      body: tag.body,
    }
  })

  return result
})
