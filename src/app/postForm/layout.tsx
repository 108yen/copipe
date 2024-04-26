import SingleComponentLayout from "@/modules/layouts/singleComponentLayout"
import { ReactNode } from "react"

export default function layout({ children }: { children: ReactNode }) {
  return <SingleComponentLayout>{children}</SingleComponentLayout>
}
