import {
  Container,
  Divider,
  Heading,
  SkeletonText,
  VStack,
} from "@yamada-ui/react"

export default function LoadingRecentPostsCard() {
  return (
    <Container>
      <VStack>
        <Heading fontSize="xl" variant="h5">
          最近の投稿
        </Heading>
        <Divider />
        <SkeletonText lineClamp={50} />
      </VStack>
    </Container>
  )
}
