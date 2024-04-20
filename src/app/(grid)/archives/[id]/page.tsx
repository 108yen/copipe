import { notFound } from "next/navigation"
import { cache } from "react"
import React from "react"
import ArchivesPagination from "./archivesPagination"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import Comment from "@/modules/comment"
import { Container, VStack } from "@yamada-ui/react"
import { prisma } from "@/db/db"
import { CopipeWithTagCommentPayload, copipeWithTagComment } from "@/db/query"

const getCopipeIds = cache(async () => {
  const ids = await prisma.copipe
    .findMany({
      select: {
        id: true,
      },
    })
    .catch((error) => {
      console.log(
        `fetch copipe_id for pagination in archives/[id] error: ${error}`,
      )
    })
  console.log(`fetch copipe_id for pagination in archives/[id]`)

  return ids!
})

async function checkBeforeAndAfterPage(currendId: number) {
  const data = await getCopipeIds()

  const copipeIds: number[] = data.map((value) => value.id)
  const currentIdIndex = copipeIds.findIndex((value) => value == currendId)
  const beforeId = currentIdIndex == 0 ? -1 : copipeIds[currentIdIndex - 1]
  const afterId =
    currentIdIndex == copipeIds.length - 1 ? -1 : copipeIds[currentIdIndex + 1]
  return { beforeId, afterId }
}

const getCopipe = cache(async (id: number) => {
  const copipe = await prisma.copipe
    .findUniqueOrThrow({
      where: { id: id },
      select: copipeWithTagComment,
    })
    .catch((error) => {
      notFound()
    })
  console.log(`fetch copipe in archives/${id}`)

  return copipe
})

function ArchiveBody(props: { copipe: CopipeWithTagCommentPayload }) {
  const { copipe } = props

  return (
    <Container>
      <CopipeCardItem copipeItem={copipe} />
    </Container>
  )
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params
  const copipe = await getCopipe(Number(id))

  return {
    title: copipe.title,
  }
}

export const revalidate = 3600

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const copipe = await getCopipe(id)
  const { beforeId, afterId } = await checkBeforeAndAfterPage(id)

  return (
    <VStack>
      <ArchiveBody copipe={copipe} />
      <Comment comments={copipe.comments} copipe_id={id} />
      <ArchivesPagination beforeId={beforeId} afterId={afterId} />
    </VStack>
  )
}
