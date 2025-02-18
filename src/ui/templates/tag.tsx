import { FetchTagCopipes } from "@/db/server/copipes"
import { CopipeCardItem } from "@/ui/components/data-display"
import { Pagination } from "@/ui/components/navigation"
import { Container, VStack } from "@yamada-ui/react"

interface TagPageTemplateProps {
  data: Awaited<FetchTagCopipes>
  page: number
  tagId: number
}

export function TagPageTemplate({ data, page, tagId }: TagPageTemplateProps) {
  const [copipes, count] = data

  return (
    <VStack>
      <Container>
        {copipes.map((e) => (
          <CopipeCardItem copipeItem={e} key={e.id} />
        ))}
      </Container>

      <Pagination
        page={page}
        total={Math.ceil(count / 10)}
        url={`/tag/${tagId}`}
      />
    </VStack>
  )
}
