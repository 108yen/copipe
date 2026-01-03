"use cache"

import { ReactNode } from "react"
import { SingleComponentLayout } from "@/ui/layouts"

export const metadata = {
  title: "このサイトについて",
}

export default function layout({ children }: { children: ReactNode }) {
  return <SingleComponentLayout>{children}</SingleComponentLayout>
}
