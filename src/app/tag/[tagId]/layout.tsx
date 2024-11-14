import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "タグ",
}

export default async function layout({ children }: { children: ReactNode }) {
  return <SideMenuLayout>{children}</SideMenuLayout>
}
