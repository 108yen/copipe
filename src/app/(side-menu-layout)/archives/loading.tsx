import LoadingComment from "@/modules/comment/loading"
import { CopipeCardItemSkelton } from "@/modules/copipeCardItemSkeleton"
import SideMenuLayout from "@/modules/layouts/sideMenuLayout"
import { Container, VStack } from "@yamada-ui/react"

export default function loading() {
  return (
    <SideMenuLayout>
      <VStack>
        <Container>
          <CopipeCardItemSkelton />
        </Container>

        <LoadingComment />
      </VStack>
    </SideMenuLayout>
  )
}
