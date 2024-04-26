import { fetchTagCopipes } from "@/db/server/copipes"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import CopipePagination from "@/modules/copipePagination"
import { Container, VStack } from "@yamada-ui/react"

export default async function page({
  params,
  searchParams,
}: {
  params: { tagId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const tagId = Number(params.tagId)
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1

  const [copipes, count] = await fetchTagCopipes(tagId, page)

  return (
    <VStack>
      <Container>
        {copipes.map((e) => (
          <CopipeCardItem key={e.id} copipeItem={e} />
        ))}
      </Container>
      <CopipePagination
        url={`/tag/${tagId}`}
        total={Math.ceil(count / 10)}
        page={page}
      />
    </VStack>
  )
}
