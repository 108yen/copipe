import { getHomePageCopipe } from "@/db/server/copipes"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import CopipePagination from "@/modules/copipePagination"
import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import SearchForm from "@/modules/searchForm"
import { Container, VStack } from "@yamada-ui/react"
import { unstable_cacheLife as cacheLife } from "next/cache"

export default async function Home() {
  "use cache"
  cacheLife("max")

  const { copipes, count } = await getHomePageCopipe()

  return (
    <SideMenuLayout>
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

        <CopipePagination
          page={1}
          total={Math.ceil(count / 10)}
          url="/search"
        />
      </VStack>
    </SideMenuLayout>
  )
}
