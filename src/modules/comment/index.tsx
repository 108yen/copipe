"use client"

import { postComment } from "@/app/(side-menu-layout)/archives/[id]/serverActions"
import { CommentPayload, CommentsPayload } from "@/db/query"
import { Container } from "@yamada-ui/react"
import { useOptimistic } from "react"

import CommentForm from "./commentForm"
import { CommentList } from "./commentList"

export default function Comment(props: {
  comments: CommentsPayload
  copipe_id: number
}) {
  const { comments, copipe_id } = props
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
