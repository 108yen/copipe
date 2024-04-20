import AppBar from "@/modules/appBar"
import RecentPostsCard from "@/modules/recentPostCard"
import TagListCard from "@/modules/tagListCard"
import { GridItem, SimpleGrid, VStack } from "@yamada-ui/react"
import { ReactNode, Suspense } from "react"
import LoadingRecentPostsCard from "@/modules/recentPostCard/loading"
import LoadingTagListCard from "@/modules/tagListCard/loading"

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppBar />
      <SimpleGrid apply="gridStyle.grid" columns={4}>
        <GridItem colSpan={{ base: 3, md: 4 }} apply="gridStyle.item">
          {children}
        </GridItem>
        <GridItem
          colSpan={{ base: 1, md: 0 }}
          display={{ base: "block", md: "none" }}
          apply="gridStyle.item"
        >
          <VStack>
            <Suspense fallback={<LoadingTagListCard />}>
              <TagListCard />
            </Suspense>
            <Suspense fallback={<LoadingRecentPostsCard />}>
              <RecentPostsCard />
            </Suspense>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </>
  )
}
