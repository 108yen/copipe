import { Container } from "@yamada-ui/react"
import {
  CopipeCardItemSkelton,
  LoadingSearchForm,
} from "@/ui/components/loading"

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
