import {
  Button,
  Card,
  Input,
  InputGroup,
  InputLeftElement,
  Loading,
  VStack,
} from "@yamada-ui/react"

export default function LoadingSearchForm(props: { text?: string }) {
  const { text } = props

  return (
    <VStack alignItems="flex-end" gap={0}>
      <Card variant="subtle" apply="searchFormStyle.card">
        <InputGroup>
          <InputLeftElement>
            <Loading variant="dots" color="secondary" />
          </InputLeftElement>
          <Input
            focusBorderColor="secondary"
            id="text"
            isReadOnly
            value={text}
          />
        </InputGroup>
      </Card>
      <Button apply="searchFormStyle.button" variant="link" disabled>
        追加はこちらから
      </Button>
    </VStack>
  )
}
