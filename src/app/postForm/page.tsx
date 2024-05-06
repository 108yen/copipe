import CopipePostForm from "@/modules/copipePostForm"
import { Container } from "@yamada-ui/react"
import { postNewCopipe } from "./serverActions"

export const metadata = {
  title: "投稿フォーム",
}

export default function Page() {
  return (
    <Container>
      <CopipePostForm postNewCopipe={postNewCopipe} />
    </Container>
  )
}
