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
        <GridItem apply="gridStyle.item" colSpan={{ base: 4 }}>
          {children}
        </GridItem>
      </SimpleGrid>
    </>
  )
}
