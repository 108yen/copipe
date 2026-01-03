import { Container, Text, VStack } from "@yamada-ui/react"
import { notFound } from "next/navigation"
import { fetchSearchCopipes } from "@/db/server/copipes"
import { searchPageScheme } from "@/schemes"
import { CopipeCardItem } from "@/ui/components/data-display"
import { SearchForm } from "@/ui/components/form"
import { Pagination } from "@/ui/components/navigation"

interface SearchPageTemplateProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function SearchPageTemplate({
  searchParams,
}: SearchPageTemplateProps) {
  const computedSearchParams = await searchParams
  const parseResult = searchPageScheme.safeParse(computedSearchParams)

  if (!parseResult.success) {
    notFound()
  }

  const { page, text } = parseResult.data

  const data = await fetchSearchCopipes(text, page)
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
        params={{ name: "text", param: parseResult.data.text }}
        total={Math.ceil(count / 10)}
        url="/search"
      />
    </VStack>
  )
}
