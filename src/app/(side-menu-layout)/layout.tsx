import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import { ReactNode } from "react"

export default function Layout({
  children,
}: {
  children: ReactNode
}) {
  return <SideMenuLayout>{children}</SideMenuLayout>
}
