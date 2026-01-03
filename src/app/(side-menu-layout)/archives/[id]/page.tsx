import { Container, VStack } from "@yamada-ui/react"
import { NextPageProps } from "next"
import { notFound } from "next/navigation"
import { Metadata } from "next/types"
import { Suspense } from "react"
import {
  fetchCopipe,
  fetchCopipeComment,
  getCopipeIds,
} from "@/db/server/copipes"
import { archivesPageScheme } from "@/schemes"
import { Comment, CopipeCardItem } from "@/ui/components/data-display"
import { CopipeCardItemSkelton, LoadingComment } from "@/ui/components/loading"
import { ArchivesPagination } from "@/ui/components/navigation"
import { checkBeforeAndAfterPage } from "@/utils/check-before-and-after-page"

export const metadata: Metadata = {
  title: "アーカイブ",
}

export default async function Page({ params }: NextPageProps<{ id: string }>) {
  return (
    <Suspense fallback={<Loading />}>
      <Archives params={params} />
    </Suspense>
  )
}

function Loading() {
  return (
    <VStack>
      <Container>
        <CopipeCardItemSkelton />
      </Container>

      <LoadingComment />
    </VStack>
  )
}

interface ArchivesProps {
  params: Promise<{ id: string }>
}

async function Archives({ params }: ArchivesProps) {
  const { id } = await params
  const parseResult = archivesPageScheme.safeParse(id)

  if (!parseResult.success) {
    notFound()
  }

  const copipe = await fetchCopipe(parseResult.data)
  const comments = await fetchCopipeComment(parseResult.data)
  const ids = await getCopipeIds()

  const { afterId, beforeId } = checkBeforeAndAfterPage(ids, parseResult.data)

  return (
    <>
      <title>{`${copipe.title} | copipe`}</title>

      <VStack>
        <Container>
          <CopipeCardItem copipeItem={copipe} />
        </Container>

        <Comment comments={comments} copipe_id={parseResult.data} />

        <ArchivesPagination afterId={afterId} beforeId={beforeId} />
      </VStack>
    </>
  )
}
