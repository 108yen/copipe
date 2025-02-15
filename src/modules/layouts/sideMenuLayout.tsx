import AppBar from "@/modules/appBar"
import RecentPostsCard from "@/modules/recentPostCard/recentPostCard"
import TagListCard from "@/modules/tagListCard/tagListCard"
import { GridItem, SimpleGrid, VStack } from "@yamada-ui/react"
import { PropsWithChildren, Suspense } from "react"

import LoadingRecentPostsCard from "../recentPostCard/loading"
import LoadingTagListCard from "../tagListCard/loading"

interface SideMenuLayoutProps extends PropsWithChildren {}

export default function SideMenuLayout({ children }: SideMenuLayoutProps) {
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
