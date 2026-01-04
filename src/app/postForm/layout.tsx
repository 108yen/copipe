"use cache"

import { ReactNode } from "react"
import { SingleComponentLayout } from "@/ui/layouts"

export const metadata = {
  title: "投稿フォーム",
}

export default async function Layout({ children }: { children: ReactNode }) {
  return <SingleComponentLayout>{children}</SingleComponentLayout>
}
