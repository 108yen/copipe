import { fetchSearchCopipes } from "@/db/server/copipes"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import CopipePagination from "@/modules/copipePagination"
import SearchForm from "@/modules/searchForm"
import { Container, Text, VStack } from "@yamada-ui/react"

interface SearchPageTemplateProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function SearchPageTemplate({
  searchParams: searchParamsProps,
}: SearchPageTemplateProps) {
  const searchParams = await searchParamsProps
  const searchText =
    typeof searchParams.text === "string" ? searchParams.text : ""
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1

  const [copipes, count] = await fetchSearchCopipes(searchText, page)

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

      <CopipePagination
        page={page}
        params={{ name: "text", param: searchText }}
        total={Math.ceil(count / 10)}
        url="/search"
      />
    </VStack>
  )
}
