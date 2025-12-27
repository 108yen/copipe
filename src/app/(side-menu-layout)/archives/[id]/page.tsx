import { Container, VStack } from "@yamada-ui/react"
import { NextPageProps } from "next"
import { cacheLife, cacheTag } from "next/cache"
import { notFound } from "next/navigation"
import { Metadata } from "next/types"
import { fetchCopipe, getCopipeIds } from "@/db/server/copipes"
import { archivesPageScheme } from "@/schemes"
import { Comment, CopipeCardItem } from "@/ui/components/data-display"
import { ArchivesPagination } from "@/ui/components/navigation"
import { checkBeforeAndAfterPage } from "@/utils/check-before-and-after-page"

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }]
}

export const metadata: Metadata = {
  title: "アーカイブ",
}

export default async function Page({ params }: NextPageProps<{ id: string }>) {
  "use cache"
  cacheTag("copipe-page")
  cacheLife("max")

  const { id: idProp } = await params
  const result = archivesPageScheme.safeParse(idProp)

  if (!result.success) {
    notFound()
  }

  const id = result.data

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

// async function DynamicContent({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = await params
//   const parseResult = archivesPageScheme.safeParse(id)

//   if (!parseResult.success) {
//     notFound()
//   }

//   return <CachedContent id={parseResult.data} />
// }

// function Loading() {
//   return (
//     <VStack>
//       <Container>
//         <CopipeCardItemSkelton />
//       </Container>

//       <LoadingComment />
//     </VStack>
//   )
// }

// interface CachedContentProps {
//   id: number
// }

// async function CachedContent({ id }: CachedContentProps) {
//   "use cache"
//   cacheTag("copipe-page")
//   cacheLife("max")

//   const copipe = await fetchCopipe(id)
//   const ids = await getCopipeIds()

//   const { afterId, beforeId } = checkBeforeAndAfterPage(ids, id)

//   return (
//     <>
//       <title>{`${copipe.title} | copipe`}</title>

//       <VStack>
//         <Container>
//           <CopipeCardItem copipeItem={copipe} />
//         </Container>

//         <Comment comments={copipe.comments} copipe_id={id} />

//         <ArchivesPagination afterId={afterId} beforeId={beforeId} />
//       </VStack>
//     </>
//   )
// }
