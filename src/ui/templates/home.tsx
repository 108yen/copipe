import { Container, VStack } from "@yamada-ui/react"
import { GetHomePageCopipeReturn } from "@/db/server/copipes"
import { CopipeCardItem } from "@/ui/components/data-display"
import { SearchForm } from "@/ui/components/form"
import { Pagination } from "@/ui/components/navigation"

interface HomePageTemplateProps extends Awaited<GetHomePageCopipeReturn> {}

export function HomePageTemplate({ copipes, count }: HomePageTemplateProps) {
  return (
    <VStack>
      <SearchForm />

      <Container>
        {copipes.map((copipe) => (
          <CopipeCardItem
            copipeItem={copipe}
            key={`copipe-card-item-${copipe.id}`}
          />
        ))}
      </Container>

      <Pagination page={1} total={Math.ceil(count / 10)} url="/search" />
    </VStack>
  )
}
