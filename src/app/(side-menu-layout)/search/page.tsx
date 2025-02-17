import { fetchSearchCopipes } from "@/db/server/copipes"
import { SearchPageTemplate } from "@/ui/templates"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "検索",
}

export default async function page({
  searchParams: searchParamsProps,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const searchParams = await searchParamsProps
  const searchText =
    typeof searchParams.text === "string" ? searchParams.text : ""
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1

  const data = await fetchSearchCopipes(searchText, page)

  return <SearchPageTemplate data={data} page={page} searchText={searchText} />
}
