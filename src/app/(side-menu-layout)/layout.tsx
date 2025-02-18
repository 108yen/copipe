import { fetchRecentCopipes } from "@/db/server/copipes"
import { fetchTags } from "@/db/server/tags"
import { SideMenuLayout } from "@/ui/layouts"
import { PropsWithChildren } from "react"

interface LayoutProps extends PropsWithChildren {}

export default async function Layout({ children }: LayoutProps) {
  const copipes = await fetchRecentCopipes()
  const tags = await fetchTags()

  return (
    <SideMenuLayout copipes={copipes} tags={tags}>
      {children}
    </SideMenuLayout>
  )
}
