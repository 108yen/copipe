import { Container, VStack } from "@yamada-ui/react"
import { CopipeCardItemSkelton, LoadingComment } from "@/ui/components/loading"

export default function Loading() {
  return (
    <VStack>
      <Container>
        <CopipeCardItemSkelton />
      </Container>

      <LoadingComment />
    </VStack>
  )
}
