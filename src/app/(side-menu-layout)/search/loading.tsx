import {
  CopipeCardItemSkelton,
  LoadingSearchForm,
} from "@/ui/components/loading"
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
