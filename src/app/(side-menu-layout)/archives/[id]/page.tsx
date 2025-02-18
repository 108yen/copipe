import { fetchCopipe, getCopipeIds } from "@/db/server/copipes"
import { ArchivesPageTemplate } from "@/ui/templates"
import { checkBeforeAndAfterPage } from "@/utils/check-before-and-after-page"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "アーカイブ",
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id: idProp } = await params
  const id = Number(idProp)

  const copipe = await fetchCopipe(id)
  const ids = await getCopipeIds()

  const { afterId, beforeId } = checkBeforeAndAfterPage(ids, id)

  return (
    <ArchivesPageTemplate
      afterId={afterId}
      beforeId={beforeId}
      copipe={copipe}
      id={id}
    />
  )
}
