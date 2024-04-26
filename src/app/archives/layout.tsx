import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import { ReactNode } from "react"

export default async function layout({ children }: { children: ReactNode }) {
  return <SideMenuLayout>{children}</SideMenuLayout>
}
