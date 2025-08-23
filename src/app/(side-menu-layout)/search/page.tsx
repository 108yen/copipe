import { NextPageProps } from "next"
import { notFound } from "next/navigation"
import { Metadata } from "next/types"
import { fetchSearchCopipes } from "@/db/server/copipes"
import { searchPageScheme } from "@/schemes"
import { SearchPageTemplate } from "@/ui/templates"

export const metadata: Metadata = {
  title: "検索",
}

export default async function page({ searchParams }: NextPageProps) {
  const computedSearchParams = await searchParams
  const parseResult = searchPageScheme.safeParse(computedSearchParams)

  if (!parseResult.success) {
    notFound()
  }

  const { page, text } = parseResult.data

  const data = await fetchSearchCopipes(text, page)

  return <SearchPageTemplate data={data} page={page} searchText={text} />
}
