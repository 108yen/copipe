import LoadingComment from "@/modules/comment/loading"
import { CopipeCardItemSkelton } from "@/modules/copipeCardItemSkeleton"
import { Container, VStack } from "@yamada-ui/react"

export default function loading() {
  return (
    <VStack>
      <Container>
        <CopipeCardItemSkelton />
      </Container>
      <LoadingComment />
    </VStack>
  )
}
