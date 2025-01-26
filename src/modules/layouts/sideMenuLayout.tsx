import { fetchRecentCopipes } from "@/db/server/copipes"
import { fetchTags } from "@/db/server/tags"
import AppBar from "@/modules/appBar"
import RecentPostsCard from "@/modules/recentPostCard/recentPostCard"
import TagListCard from "@/modules/tagListCard/tagListCard"
import { GridItem, SimpleGrid, VStack } from "@yamada-ui/react"
import { unstable_cacheLife as cacheLife } from "next/cache"
import { ReactNode } from "react"

export default async function SideMenuLayout({
  children,
}: {
  children: ReactNode
}) {
  "use cache"
  cacheLife("max")

  const tags = await fetchTags()
  const copipes = await fetchRecentCopipes()

  return (
    <>
      <AppBar />

      <SimpleGrid apply="gridStyle.grid" as="main" columns={4}>
        <GridItem apply="gridStyle.item" colSpan={{ base: 3, md: 4 }}>
          {children}
        </GridItem>

        <GridItem
          apply="gridStyle.item"
          colSpan={{ base: 1, md: 0 }}
          display={{ base: "block", md: "none" }}
        >
          <VStack>
            <TagListCard tags={tags} />

            <RecentPostsCard copipes={copipes} />
          </VStack>
        </GridItem>
      </SimpleGrid>
    </>
  )
}
