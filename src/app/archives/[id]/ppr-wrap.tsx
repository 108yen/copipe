import { fetchCopipe } from "@/db/server/copipes"
import Comment from "@/modules/comment"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import ArchivesPagination from "./archivesPagination"
import { checkBeforeAndAfterPage } from "./utils"

interface Props {
  params: Promise<{ id: string }>
}

export async function PPRCopipeCardItem({ params }: Props) {
  const id = Number((await params).id)
  const copipe = await fetchCopipe(id)

  return <CopipeCardItem copipeItem={copipe} />
}

export async function PPRComment({ params }: Props) {
  const id = Number((await params).id)
  const { comments } = await fetchCopipe(id)

  return <Comment comments={comments} copipe_id={id} />
}

export async function PPRArchivesPagination({ params }: Props) {
  const id = Number((await params).id)
  const { beforeId, afterId } = await checkBeforeAndAfterPage(id)

  return <ArchivesPagination beforeId={beforeId} afterId={afterId} />
}
