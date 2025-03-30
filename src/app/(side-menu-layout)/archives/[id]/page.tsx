import { fetchCopipe, getCopipeIds } from "@/db/server/copipes"
import { archivesPageScheme } from "@/schemes"
import { ArchivesPageTemplate } from "@/ui/templates"
import { checkBeforeAndAfterPage } from "@/utils/check-before-and-after-page"
import { NextPageProps } from "next"
import { notFound } from "next/navigation"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "アーカイブ",
}

export default async function Page({ params }: NextPageProps<{ id: string }>) {
  const { id } = await params
  const parseResult = archivesPageScheme.safeParse(id)

  if (!parseResult.success) {
    notFound()
  }

  const copipe = await fetchCopipe(parseResult.data)
  const ids = await getCopipeIds()

  const { afterId, beforeId } = checkBeforeAndAfterPage(ids, parseResult.data)

  return (
    <>
      <title>{`${copipe.title} | copipe`}</title>

      <ArchivesPageTemplate
        afterId={afterId}
        beforeId={beforeId}
        copipe={copipe}
        id={parseResult.data}
      />
    </>
  )
}
