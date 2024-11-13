import { CopipeCardItemSkelton } from "@/modules/copipeCardItemSkeleton"
import { Container, VStack } from "@yamada-ui/react"
import { Suspense } from "react"
import {
  PPRArchivesPagination,
  PPRComment,
  PPRCopipeCardItem,
} from "./ppr-wrap"

export const experimental_ppr = true

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  return (
    <VStack>
      <Container>
        <Suspense fallback={<CopipeCardItemSkelton />}>
          <PPRCopipeCardItem params={params} />
        </Suspense>
      </Container>
      <Suspense>
        <PPRComment params={params} />
      </Suspense>
      <PPRArchivesPagination params={params} />
    </VStack>
  )
}
