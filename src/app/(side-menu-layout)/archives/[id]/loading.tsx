import { CopipeCardItemSkelton, LoadingComment } from "@/ui/components/loading"
import { Container, VStack } from "@yamada-ui/react"

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
