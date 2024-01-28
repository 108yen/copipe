'use client'

import { useOptimistic } from "react";
import CopipeCard from "../copipeCard";
import { CommentList } from "./commentList";
import CommentForm from "./commentForm";
import { postComment } from "@/app/archives/[id]/serverActions";
import { CommentPayload, CommentsPayload } from "@/db/query";

export default function Comment(props: { comments: CommentsPayload, copipe_id: number }) {
    const { comments, copipe_id } = props;
    const [optimisticComments, addOptimisticComment] = useOptimistic(
        comments,
        (state, newComent: CommentPayload) => {
            return [...state, newComent]
        }
    )

    return (
        <CopipeCard>
            <CommentList comments={optimisticComments} />
            <CommentForm
                copipe_id={copipe_id}
                addOptimisticComment={addOptimisticComment}
                postComment={postComment}
            />
        </CopipeCard>
    )
} 