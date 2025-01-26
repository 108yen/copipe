import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import { ReactNode } from "react"

export default function Template({ children }: { children: ReactNode }) {
  return <SideMenuLayout>{children}</SideMenuLayout>
}
