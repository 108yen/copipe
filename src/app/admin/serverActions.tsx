"use server"
import { prisma } from "@/db/db"
import { revalidatePath } from "next/cache"

async function insertTags(copipe_id: number, tag_ids: number[]) {
  const query = tag_ids.map((tag_id) =>
    prisma.copipeToTag.upsert({
      where: {
        copipe_id_tag_id: {
          copipe_id: copipe_id,
          tag_id: tag_id,
        },
      },
      update: {},
      create: {
        copipe_id: copipe_id,
        tag_id: tag_id,
      },
    }),
  )
  await prisma.$transaction(query).catch((error) => {
    throw new Error(JSON.stringify(error))
  })
}

async function deleteTags(copipe_id: number) {
  await prisma.copipeToTag
    .deleteMany({
      where: { copipe_id: copipe_id },
    })
    .catch((error) => {
      throw new Error(JSON.stringify(error))
    })
}

export async function updateTags(copipe_id: number, tag_ids: number[]) {
  try {
    await deleteTags(copipe_id)
    await insertTags(copipe_id, tag_ids)
  } catch (error) {
    return { error: JSON.stringify(error) }
  }
  revalidatePath("/admin/[page]", "page")
}
