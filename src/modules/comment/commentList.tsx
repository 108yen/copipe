import { CommentsPayload } from "@/db/query"
import { Divider, VStack } from "@yamada-ui/react"
import { CommentItem } from "./commentItem"

export function CommentList(props: { comments: CommentsPayload }) {
  const { comments } = props

  return (
    <VStack divider={<Divider />}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </VStack>
  )
}
