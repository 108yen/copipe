'use client'

import { CopipeComment } from "@/models/comment";
import { useOptimistic } from "react";
import CopipeCard from "../copipeCard";
import { CommentList } from "./commentList";
import CommentForm from "./commentForm";
import { postComment } from "@/app/archives/[id]/serverActions";

export default function Comment(props: { comments: CopipeComment[], copipe_id: number }) {
    const { comments, copipe_id } = props;
    const [optimisticComments, addOptimisticComment] = useOptimistic(
        comments,
        (state, newComent: CopipeComment) => {
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