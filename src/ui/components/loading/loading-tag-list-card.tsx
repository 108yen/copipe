import {
  Container,
  Heading,
  Separator,
  SkeletonText,
  VStack,
} from "@yamada-ui/react"

export function LoadingTagListCard() {
  return (
    <Container>
      <VStack>
        <Heading fontSize="xl" variant="h5">
          タグ一覧
        </Heading>

        <Separator />

        <SkeletonText lineClamp={5} />
      </VStack>
    </Container>
  )
}
