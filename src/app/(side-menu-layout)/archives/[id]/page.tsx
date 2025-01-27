import { Suspense } from "react"

import ArchivePageLoading from "./page-loading"
import { ArchivePageTemplate } from "./page-template"

export const dynamic = "force-static"

export default function page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<ArchivePageLoading />}>
      <ArchivePageTemplate params={params} />
    </Suspense>
  )
}
