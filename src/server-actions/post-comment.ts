"use server"

import { updateTag } from "next/cache"
import { prisma } from "@/db/db"

export async function postComment(copipe_id: number, body: string) {
  try {
    await prisma.comments.create({
      data: {
        body: body,
        copipe: {
          connect: {
            id: copipe_id,
          },
        },
      },
    })
  } catch (error) {
    return { error: JSON.stringify(error) }
  } finally {
    updateTag(`comments-${copipe_id}`)
  }
}
