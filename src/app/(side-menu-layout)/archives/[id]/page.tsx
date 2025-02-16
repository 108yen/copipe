import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import { Metadata } from "next/types"
import { Suspense } from "react"

import ArchivePageLoading from "./page-loading"
import { ArchivePageTemplate } from "./page-template"

export const metadata: Metadata = {
  title: "アーカイブ",
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <SideMenuLayout>
      <Suspense fallback={<ArchivePageLoading />}>
        <ArchivePageTemplate params={params} />
      </Suspense>
    </SideMenuLayout>
  )
}
