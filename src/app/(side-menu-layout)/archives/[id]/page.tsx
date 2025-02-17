import { fetchCopipe } from "@/db/server/copipes"
import Comment from "@/modules/comment"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import { Container, VStack } from "@yamada-ui/react"
import { Metadata } from "next/types"

import ArchivesPagination from "./archivesPagination"
import { checkBeforeAndAfterPage } from "./utils"

export const metadata: Metadata = {
  title: "アーカイブ",
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id: idProp } = await params
  const id = Number(idProp)

  const copipe = await fetchCopipe(id)
  const { afterId, beforeId } = await checkBeforeAndAfterPage(id)

  return (
    <VStack>
      <Container>
        <CopipeCardItem copipeItem={copipe} />
      </Container>

      <Comment comments={copipe.comments} copipe_id={id} />

      <ArchivesPagination afterId={afterId} beforeId={beforeId} />
    </VStack>
  )
}
