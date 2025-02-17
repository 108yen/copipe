import {
  Button,
  Container,
  Separator,
  SkeletonText,
  Text,
  Textarea,
  VStack,
} from "@yamada-ui/react"

export function LoadingComment() {
  return (
    <Container>
      <VStack separator={<Separator />}>
        {[...Array(3)].map((value) => (
          <VStack key={`comments-skelton-${value}`}>
            <Text color="gray" fontSize="sm">
              <SkeletonText lineClamp={1} width={120} />
            </Text>

            <Text>
              <SkeletonText />
            </Text>
          </VStack>
        ))}
      </VStack>

      <VStack alignItems="center" w="full">
        <Textarea
          disabled
          focusBorderColor="secondary"
          id="body"
          placeholder="コメント"
        />

        <Button
          borderColor="secondary"
          color="secondary"
          disabled
          variant="outline"
          w="fit-content"
        >
          コメント
        </Button>
      </VStack>
    </Container>
  )
}
