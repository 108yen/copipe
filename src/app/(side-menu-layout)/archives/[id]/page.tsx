import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import { Suspense } from "react"

import ArchivePageLoading from "./page-loading"
import { ArchivePageTemplate } from "./page-template"

export default function page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <SideMenuLayout>
      <Suspense fallback={<ArchivePageLoading />}>
        <ArchivePageTemplate params={params} />
      </Suspense>
    </SideMenuLayout>
  )
}
