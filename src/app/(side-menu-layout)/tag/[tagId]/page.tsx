import { fetchTagCopipes } from "@/db/server/copipes"
import { fetchTag } from "@/db/server/tags"
import { TagPageTemplate } from "@/ui/templates"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "タグ",
}

export default async function Page(props: {
  params: Promise<{ tagId: string }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const searchParams = await props.searchParams
  const params = await props.params
  const tagId = Number(params.tagId)
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1

  const tagName = await fetchTag(tagId)
  const data = await fetchTagCopipes(tagId, page)

  return (
    <>
      <title>{`${tagName} | copipe`}</title>

      <TagPageTemplate data={data} page={page} tagId={tagId} />
    </>
  )
}
