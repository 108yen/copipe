import { CopipeCardItemSkelton } from "@/modules/copipeCardItemSkeleton"
import LoadingSearchForm from "@/modules/loadingSearchForm"
import { Container } from "@yamada-ui/react"

export function SearchPageLoading() {
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
