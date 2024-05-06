import { fetchCopipe } from "@/db/server/copipes"
import Comment from "@/modules/comment"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import { Container, VStack } from "@yamada-ui/react"
import ArchivesPagination from "./archivesPagination"
import { checkBeforeAndAfterPage } from "./utils"

export const revalidate = 3600

export default async function page({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const copipe = await fetchCopipe(id)
  const { beforeId, afterId } = await checkBeforeAndAfterPage(id)

  return (
    <VStack>
      <Container>
        <CopipeCardItem copipeItem={copipe} />
      </Container>
      <Comment comments={copipe.comments} copipe_id={id} />
      <ArchivesPagination beforeId={beforeId} afterId={afterId} />
    </VStack>
  )
}
