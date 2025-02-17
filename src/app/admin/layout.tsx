import { SingleComponentLayout } from "@/ui/layouts"
import { ReactNode } from "react"

export const metadata = {
  title: "管理画面",
}

export default function Layout({ children }: { children: ReactNode }) {
  return <SingleComponentLayout>{children}</SingleComponentLayout>
}
