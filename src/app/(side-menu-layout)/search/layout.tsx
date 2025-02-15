import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import { ReactNode } from "react"

export const metadata = {
  title: "検索",
}

export default function layout({ children }: { children: ReactNode }) {
  return <SideMenuLayout>{children}</SideMenuLayout>
}
