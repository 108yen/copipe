import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "アーカイブ",
}

export default function layout({ children }: { children: ReactNode }) {
  return <SideMenuLayout>{children}</SideMenuLayout>
}
