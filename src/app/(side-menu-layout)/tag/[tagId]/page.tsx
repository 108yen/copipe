import { fetchTagCopipes } from "@/db/server/copipes"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import CopipePagination from "@/modules/copipePagination"
import { Container, VStack } from "@yamada-ui/react"

export default async function page(props: {
  params: Promise<{ tagId: string }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const searchParams = await props.searchParams
  const params = await props.params
  const tagId = Number(params.tagId)
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1

  const [copipes, count] = await fetchTagCopipes(tagId, page)

  return (
    <VStack>
      <Container>
        {copipes.map((e) => (
          <CopipeCardItem copipeItem={e} key={e.id} />
        ))}
      </Container>
      <CopipePagination
        page={page}
        total={Math.ceil(count / 10)}
        url={`/tag/${tagId}`}
      />
    </VStack>
  )
}
