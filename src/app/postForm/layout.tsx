import { SingleComponentLayout } from "@/ui/layouts"
import { ReactNode } from "react"

export const metadata = {
  title: "投稿フォーム",
}

export default function Layout({ children }: { children: ReactNode }) {
  return <SingleComponentLayout>{children}</SingleComponentLayout>
}
