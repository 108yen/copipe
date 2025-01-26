import { fetchCopipe } from "@/db/server/copipes"
import Comment from "@/modules/comment"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import { Container, VStack } from "@yamada-ui/react"

import ArchivesPagination from "./archivesPagination"
import { checkBeforeAndAfterPage } from "./utils"

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = Number((await params).id)
  const copipe = await fetchCopipe(id)
  const { afterId, beforeId } = await checkBeforeAndAfterPage(id)

  return (
    <SideMenuLayout>
      <VStack>
        <Container>
          <CopipeCardItem copipeItem={copipe} />
        </Container>

        <Comment comments={copipe.comments} copipe_id={id} />

        <ArchivesPagination afterId={afterId} beforeId={beforeId} />
      </VStack>
    </SideMenuLayout>
  )
}
