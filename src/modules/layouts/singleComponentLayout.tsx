import { GridItem, SimpleGrid } from "@yamada-ui/react"
import { ReactNode } from "react"
import AppBar from "../appBar"

export default function SingleComponentLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <AppBar />
      <SimpleGrid apply="gridStyle.grid" columns={4}>
        <GridItem colSpan={{ base: 4 }} apply="gridStyle.item">
          {children}
        </GridItem>
      </SimpleGrid>
    </>
  )
}
