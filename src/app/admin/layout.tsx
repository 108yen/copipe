"use cache"

import { ReactNode } from "react"
import { SingleComponentLayout } from "@/ui/layouts"

export const metadata = {
  title: "管理画面",
}

export default async function Layout({ children }: { children: ReactNode }) {
  return <SingleComponentLayout>{children}</SingleComponentLayout>
}
