import { fetchSearchCopipes } from "@/db/server/copipes"
import { SearchPageTemplate } from "@/ui/templates"
import { NextPageProps } from "next"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "検索",
}

export default async function page({ searchParams }: NextPageProps) {
  const { page: pageProp, text } = await searchParams
  const searchText = typeof text === "string" ? text : ""
  const page = typeof pageProp === "string" ? Number(pageProp) : 1

  const data = await fetchSearchCopipes(searchText, page)

  return <SearchPageTemplate data={data} page={page} searchText={searchText} />
}
