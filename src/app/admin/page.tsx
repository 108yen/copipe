import { fetchAdminCopipes } from "@/db/server/copipes"
import { AdminPageTemplate } from "@/ui/templates"

export default async function Page(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const searchParams = await props.searchParams
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1
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
