import { NextPageProps } from "next"
import { notFound } from "next/navigation"
import { Metadata } from "next/types"
import { fetchTagCopipes } from "@/db/server/copipes"
import { fetchTag } from "@/db/server/tags"
import { tagPageScheme } from "@/schemes"
import { TagPageTemplate } from "@/ui/templates"

export const metadata: Metadata = {
  title: "タグ",
}

export default async function Page({
  params,
  searchParams,
}: NextPageProps<{ tagId: string }>) {
  const { tagId } = await params
  const { page } = await searchParams

  const parseResult = tagPageScheme.safeParse({ page, tagId })

  if (!parseResult.success) {
    notFound()
  }

  const tagName = await fetchTag(parseResult.data.tagId)
  const data = await fetchTagCopipes(
    parseResult.data.tagId,
    parseResult.data.page,
  )

  return (
    <>
      <title>{`${tagName} | copipe`}</title>

      <TagPageTemplate data={data} {...parseResult.data} />
    </>
  )
}
