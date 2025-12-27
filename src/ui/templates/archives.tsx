"use cache"
import { Container, VStack } from "@yamada-ui/react"
import { fetchCopipe, getCopipeIds } from "@/db/server/copipes"
import { checkBeforeAndAfterPage } from "@/utils/check-before-and-after-page"
import { Comment, CopipeCardItem } from "../components/data-display"
import { ArchivesPagination } from "../components/navigation"

interface ArchivesPageTemplateProps {
  id: number
}

export async function ArchivesPageTemplate({ id }: ArchivesPageTemplateProps) {
  const copipe = await fetchCopipe(id)
  const ids = await getCopipeIds()

  const { afterId, beforeId } = checkBeforeAndAfterPage(ids, id)

  return (
    <>
      <title>{`${copipe.title} | copipe`}</title>

      <VStack>
        <Container>
          <CopipeCardItem copipeItem={copipe} />
        </Container>

        <Comment comments={copipe.comments} copipe_id={id} />

        <ArchivesPagination afterId={afterId} beforeId={beforeId} />
      </VStack>
    </>
  )
}
