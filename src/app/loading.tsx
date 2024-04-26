import { CopipeCardItemSkelton } from "@/modules/copipeCardItemSkeleton"
import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import LoadingSearchForm from "@/modules/loadingSearchForm"
import { Container } from "@yamada-ui/react"

export default function loading() {
  return (
    <SideMenuLayout>
      <LoadingSearchForm />
      <Container>
        {[...Array(10)].map((_, index) => (
          <CopipeCardItemSkelton key={`skelton-${index}`} />
        ))}
      </Container>
    </SideMenuLayout>
  )
}
