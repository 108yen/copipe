import { fetchRecentCopipes } from "@/db/server/copipes"
import { fetchTags } from "@/db/server/tags"
import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import { ReactNode } from "react"

export default async function Layout({ children }: { children: ReactNode }) {
  const tags = await fetchTags()
  const copipes = await fetchRecentCopipes()

  return (
    <SideMenuLayout copipes={copipes} tags={tags}>
      {children}
    </SideMenuLayout>
  )
}
