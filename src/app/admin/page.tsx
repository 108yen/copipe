import { fetchAdminCopipes } from "@/db/server/copipes"
import AdminPageTemplate from "@/modules/admin"
import CopipePagination from "@/modules/copipePagination"
import { VStack } from "@yamada-ui/react"

export const revalidate = 3600

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1
  const [copipes, count, tags] = await fetchAdminCopipes(page)

  return (
    <VStack>
      <AdminPageTemplate copipes={copipes} tags={tags} />
      <CopipePagination
        url="/admin"
        total={count ? Math.ceil(count / 100) : 0}
        page={page}
      />
    </VStack>
  )
}
