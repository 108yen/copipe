import { fetchAdminCopipes } from "@/db/server/copipes"
import { AdminPageTemplate } from "@/ui/templates"
import { NextPageProps } from "next"

export default async function Page({ searchParams }: NextPageProps) {
  const { page: pageProp } = await searchParams
  const page = typeof pageProp === "string" ? Number(pageProp) : 1
  const [copipes, count, tags] = await fetchAdminCopipes(page)

  return (
    <AdminPageTemplate
      copipes={copipes}
      count={count}
      page={page}
      tags={tags}
    />
  )
}
