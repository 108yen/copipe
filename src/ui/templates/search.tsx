import { Container, Text, VStack } from "@yamada-ui/react"
import { FetchSearchCopipes } from "@/db/server/copipes"
import { CopipeCardItem } from "@/ui/components/data-display"
import { SearchForm } from "@/ui/components/form"
import { Pagination } from "@/ui/components/navigation"

interface SearchPageTemplateProps {
  data: Awaited<FetchSearchCopipes>
  page: number
  searchText: string
}

export function SearchPageTemplate({
  data,
  page,
  searchText,
}: SearchPageTemplateProps) {
  const [copipes, count] = data

  return (
    <VStack>
      <SearchForm />

      <Container>
        {copipes.length == 0 ? (
          <Text textStyle="noHit" variant="body1">
            該当なし
          </Text>
        ) : (
          copipes.map((copipe) => (
            <CopipeCardItem copipeItem={copipe} key={copipe.id} />
          ))
        )}
      </Container>

      <Pagination
        page={page}
        params={{ name: "text", param: searchText }}
        total={Math.ceil(count / 10)}
        url="/search"
      />
    </VStack>
  )
}
