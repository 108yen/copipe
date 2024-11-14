import { fetchSearchCopipes } from "@/db/server/copipes"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import CopipePagination from "@/modules/copipePagination"
import SearchForm from "@/modules/searchForm"
import { Container, Text, VStack } from "@yamada-ui/react"

export default async function page(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams
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
          <Text variant="body1" textStyle="noHit">
            該当なし
          </Text>
        ) : (
          copipes.map((copipe) => (
            <CopipeCardItem key={copipe.id} copipeItem={copipe} />
          ))
        )}
      </Container>
      <CopipePagination
        url="/search"
        params={{ name: "text", param: searchText }}
        total={Math.ceil(count / 10)}
        page={page}
      />
    </VStack>
  )
}
