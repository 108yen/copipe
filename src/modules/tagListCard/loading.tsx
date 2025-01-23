import {
  Container,
  Divider,
  Heading,
  SkeletonText,
  VStack,
} from "@yamada-ui/react"

export default function LoadingTagListCard() {
  return (
    <Container>
      <VStack>
        <Heading fontSize="xl" variant="h5">
          タグ一覧
        </Heading>
        <Divider />
        <SkeletonText lineClamp={5} />
      </VStack>
    </Container>
  )
}
