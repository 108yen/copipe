import { ReactNode } from "react"

export const metadata = {
  title: "検索",
}

export default async function layout({ children }: { children: ReactNode }) {
  return <section>{children}</section>
}
