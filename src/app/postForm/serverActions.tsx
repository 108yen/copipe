"use server"

import { prisma } from "@/db/db"
import { revalidatePath } from "next/cache"

export async function postNewCopipe(props: { body: string; title: string; }) {
  const { body, title } = props

  if (await checkDupulicate(body)) {
    return { message: "投稿済みのコピペ" }
  }

  await prisma.copipe
    .create({
      data: {
        body: body,
        title: title,
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
