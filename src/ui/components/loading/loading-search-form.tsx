import {
  Button,
  Card,
  Input,
  InputGroup,
  InputLeftElement,
  Loading,
  VStack,
} from "@yamada-ui/react"

interface LoadingSearchFormProps {
  text?: string
}

export function LoadingSearchForm({ text }: LoadingSearchFormProps) {
  return (
    <VStack alignItems="flex-end" gap={0}>
      <Card apply="searchFormStyle.card" variant="subtle">
        <InputGroup>
          <InputLeftElement>
            <Loading color="secondary" variant="dots" />
          </InputLeftElement>

          <Input focusBorderColor="secondary" id="text" readOnly value={text} />
        </InputGroup>
      </Card>

      <Button apply="searchFormStyle.button" disabled variant="link">
        追加はこちらから
      </Button>
    </VStack>
  )
}
