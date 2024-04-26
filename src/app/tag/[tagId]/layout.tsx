import { fetchTag } from "@/db/server/tags"
import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import { ReactNode } from "react"

export async function generateMetadata({
  params,
}: {
  params: { tagId: string }
}) {
  const tagId = Number(params.tagId)

  const tag = await fetchTag(tagId)

  return {
    title: tag.body,
  }
}

export default async function layout({ children }: { children: ReactNode }) {
  return <SideMenuLayout>{children}</SideMenuLayout>
}
