"use server"

import { prisma } from "@/db/db"
import { revalidatePath } from "next/cache"

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
    revalidatePath(`/archives/${copipe_id}`)
  }
}
