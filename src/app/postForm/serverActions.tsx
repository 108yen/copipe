"use server"

import { prisma } from "@/db/db"
import { revalidatePath } from "next/cache"

export async function postNewCopipe(props: { title: string; body: string }) {
  const { title, body } = props

  if (await checkDupulicate(body)) {
    return { message: "投稿済みのコピペ" }
  }

  await prisma.copipe
    .create({
      data: {
        title: title,
        body: body,
      },
    })
    .catch((error) => {
      return { error: JSON.stringify(error) }
    })
    .then(() => {
      console.log("post copipe in postForm")
      revalidatePath("/")
    })
}

async function checkDupulicate(body: string) {
  const copipe = await prisma.copipe.findFirst({
    where: {
      body: {
        contains: body,
      },
    },
  })
  return copipe != null
}
