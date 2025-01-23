import AppBar from "@/modules/appBar"
import RecentPostsCard from "@/modules/recentPostCard"
import { GridItem, SimpleGrid, VStack } from "@yamada-ui/react"
import { ReactNode } from "react"
import TagListCard from "../tagListCard"

export default function SideMenuLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppBar />

      <SimpleGrid apply="gridStyle.grid" columns={4} as="main">
        <GridItem colSpan={{ base: 3, md: 4 }} apply="gridStyle.item">
          {children}
        </GridItem>

        <GridItem
          colSpan={{ base: 1, md: 0 }}
          display={{ base: "block", md: "none" }}
          apply="gridStyle.item"
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
