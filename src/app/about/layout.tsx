import { SingleComponentLayout } from "@/ui/layouts"
import { ReactNode } from "react"

export const metadata = {
  title: "このサイトについて",
}

export default function layout({ children }: { children: ReactNode }) {
  return <SingleComponentLayout>{children}</SingleComponentLayout>
}
