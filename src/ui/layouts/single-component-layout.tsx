import { Container } from "@yamada-ui/react"
import { PropsWithChildren } from "react"

interface SingleComponentLayoutProps extends PropsWithChildren {}

export function SingleComponentLayout({
  children,
}: SingleComponentLayoutProps) {
  return (
    <Container apply="gridStyle.grid" as="main">
      {children}
    </Container>
  )
}
