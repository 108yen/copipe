"use client"
import { CommentPayload, CommentsPayload } from "@/db/query"
import { postComment } from "@/server-actions"
import dayjs from "@/utils/dayjs"
import { Container, Separator, Text, VStack } from "@yamada-ui/react"
import { useOptimistic } from "react"

import { CommentForm } from "../form"
interface CommentItemProps {
  comment: CommentPayload
}

function CommentItem({ comment }: CommentItemProps) {
  return (
    <VStack>
      <Text color="gray" fontSize="sm">
        {`${dayjs(comment.created_at!).format("YYYY/MM/DD HH:mm:ss")}`}
      </Text>
      <Text>{comment.body}</Text>
    </VStack>
  )
}

interface CommentListProps {
  comments: CommentsPayload
}

function CommentList({ comments }: CommentListProps) {
  return (
    <VStack separator={<Separator />}>
      {comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </VStack>
  )
}

interface CommentProps {
  comments: CommentsPayload
  copipe_id: number
}

export function Comment({ comments, copipe_id }: CommentProps) {
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment: CommentPayload) => {
      return [...state, newComment]
    },
  )

  return (
    <Container>
      <CommentList comments={optimisticComments} />

      <CommentForm
        addOptimisticComment={addOptimisticComment}
        copipe_id={copipe_id}
        postComment={postComment}
      />
    </Container>
  )
}
