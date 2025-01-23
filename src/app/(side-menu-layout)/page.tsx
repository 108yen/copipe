import { getHomePageCopipe } from "@/db/server/copipes"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import CopipePagination from "@/modules/copipePagination"
import SearchForm from "@/modules/searchForm"
import { Container, VStack } from "@yamada-ui/react"

export default async function Home() {
  const { copipes, count } = await getHomePageCopipe()

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

      <CopipePagination page={1} total={Math.ceil(count / 10)} url="/search" />
    </VStack>
  )
}
