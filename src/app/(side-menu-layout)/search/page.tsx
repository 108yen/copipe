import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import { Suspense } from "react"

import { SearchPageLoading } from "./page-loading"
import { SearchPageTemplate } from "./page-template"

export default function page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  return (
    <SideMenuLayout>
      <Suspense fallback={<SearchPageLoading />}>
        <SearchPageTemplate searchParams={searchParams} />
      </Suspense>
    </SideMenuLayout>
  )
}
