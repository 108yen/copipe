import { getHomePageCopipe } from "@/db/server/copipes"
import { fetchTags } from "@/db/server/tags"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import CopipePagination from "@/modules/copipePagination"
import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import SearchForm from "@/modules/searchForm"
import { Container, VStack } from "@yamada-ui/react"

export const revalidate = 3600

export default async function Home() {
  const { copipes, count } = await getHomePageCopipe()
  const tags = await fetchTags()

  return (
    <SideMenuLayout tags={tags}>
      <VStack>
        <SearchForm />
        <Container>
          {copipes.map((copipe) => (
            <CopipeCardItem
              key={`copipe-card-item-${copipe.id}`}
              copipeItem={copipe}
            />
          ))}
        </Container>
        <CopipePagination
          url="/search"
          total={Math.ceil(count / 10)}
          page={1}
        />
      </VStack>
    </SideMenuLayout>
  )
}
