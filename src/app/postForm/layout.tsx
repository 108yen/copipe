import SingleComponentLayout from "@/modules/layouts/singleComponentLayout"
import { ReactNode } from "react"

export const metadata = {
  title: "投稿フォーム",
}

export default function layout({ children }: { children: ReactNode }) {
  return <SingleComponentLayout>{children}</SingleComponentLayout>
}
