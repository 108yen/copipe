import {
  Container,
  Heading,
  Separator,
  SkeletonText,
  VStack,
} from "@yamada-ui/react"

export function LoadingRecentPostCard() {
  return (
    <Container>
      <VStack>
        <Heading fontSize="xl" variant="h5">
          最近の投稿
        </Heading>

        <Separator />

        <SkeletonText lineClamp={50} />
      </VStack>
    </Container>
  )
}
