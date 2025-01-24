import AppBar from "@/modules/appBar"
import RecentPostsCard from "@/modules/recentPostCard/recentPostCard"
import TagListCard from "@/modules/tagListCard/tagListCard"
import { GridItem, SimpleGrid, VStack } from "@yamada-ui/react"
import { ReactNode } from "react"

export default function SideMenuLayout({ children }: { children: ReactNode }) {
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
            <TagListCard />

            <RecentPostsCard />
          </VStack>
        </GridItem>
      </SimpleGrid>
    </>
  )
}
