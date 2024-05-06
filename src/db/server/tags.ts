import { Tag } from "@/models/tag"
import { unstable_cache } from "next/cache"
import { notFound } from "next/navigation"
import { prisma } from "../db"

//NOTE: Tag data will not change. No problem if `unstable_cache` is broken.
//
// export const fetchTags = cache(async () => {
//   const tags = await prisma.tag.findMany()
//   console.log("tag get")
//
//   const result: Tag[] = tags.map((tag) => {
//     return {
//       id: tag.id,
//       created_at: new Date(tag.created_at),
//       body: tag.body,
//     }
//   })
//
//   return result
// })
export const fetchTags = unstable_cache(
  async function () {
    const tags = await prisma.tag.findMany()
    console.log("get tag list")

    const result: Tag[] = tags.map((tag) => {
      return {
        id: tag.id,
        created_at: new Date(tag.created_at),
        body: tag.body,
      }
    })

    return result
  },
  ["tag_list"],
  {
    revalidate: 3600,
  },
)

// export const fetchTag = cache(async (id: number) => {
//   const tag = await prisma.tag
//     .findUniqueOrThrow({
//       where: { id },
//       select: { body: true },
//     })
//     .catch(() => {
//       notFound()
//     })
//   return tag
// })
export const fetchTag = unstable_cache(
  async function (id: number) {
    const tag = await prisma.tag
      .findUniqueOrThrow({
        where: { id },
        select: { body: true },
      })
      .catch(() => {
        notFound()
      })
    return tag
  },
  ["tag_name"],
  { revalidate: 3600 },
)
