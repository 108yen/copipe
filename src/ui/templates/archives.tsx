import { FetchCopipeReturn } from "@/db/server/copipes"
import { Container, VStack } from "@yamada-ui/react"

import { Comment, CopipeCardItem } from "../components/data-display"
import { ArchivesPagination } from "../components/navigation"

interface ArchivesPageTemplateProps {
  afterId: number
  beforeId: number
  copipe: Awaited<FetchCopipeReturn>
  id: number
}

export function ArchivesPageTemplate({
  afterId,
  beforeId,
  copipe,
  id,
}: ArchivesPageTemplateProps) {
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
