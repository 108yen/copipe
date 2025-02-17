import { CopipeCardItemSkelton } from "@/modules/copipeCardItemSkeleton"
import LoadingSearchForm from "@/modules/loadingSearchForm"
import { Container } from "@yamada-ui/react"

export default function Loading() {
  return (
    <>
      <LoadingSearchForm />

      <Container>
        {[...Array(10)].map((_, index) => (
          <CopipeCardItemSkelton key={`skelton-${index}`} />
        ))}
      </Container>
    </>
  )
}
