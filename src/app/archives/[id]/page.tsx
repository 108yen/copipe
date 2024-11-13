import { CopipeCardItemSkelton } from "@/modules/copipeCardItemSkeleton"
import { Container, VStack } from "@yamada-ui/react"
import { Suspense } from "react"
import {
  PPRArchivesPagination,
  PPRComment,
  PPRCopipeCardItem,
} from "./ppr-wrap"

export const experimental_ppr = true

export default async function page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
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
