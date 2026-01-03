import { Container, VStack } from "@yamada-ui/react"
import { notFound } from "next/navigation"
import { fetchTagCopipes } from "@/db/server/copipes"
import { fetchTag } from "@/db/server/tags"
import { tagPageScheme } from "@/schemes"
import { CopipeCardItem } from "@/ui/components/data-display"
import { Pagination } from "@/ui/components/navigation"

interface TagPageTemplateProps {
  params: Promise<{
    tagId: string
  }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function TagPageTemplate({
  params,
  searchParams,
}: TagPageTemplateProps) {
  "use cache: remote"

  const { tagId } = await params
  const { page } = await searchParams

  const parseResult = tagPageScheme.safeParse({ page, tagId })

  if (!parseResult.success) {
    notFound()
  }

  const tagName = await fetchTag(parseResult.data.tagId)
  const data = await fetchTagCopipes(
    parseResult.data.tagId,
    parseResult.data.page,
  )
  const [copipes, count] = data

  return (
    <>
      <title>{`${tagName} | copipe`}</title>

      <VStack>
        <Container>
          {copipes.map((e) => (
            <CopipeCardItem copipeItem={e} key={e.id} />
          ))}
        </Container>

        <Pagination
          page={parseResult.data.page}
          total={Math.ceil(count / 10)}
          url={`/tag/${tagId}`}
        />
      </VStack>
    </>
  )
}
