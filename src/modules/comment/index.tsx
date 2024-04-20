"use client";

import { useOptimistic } from "react";
import { CommentList } from "./commentList";
import CommentForm from "./commentForm";
import { postComment } from "@/app/(grid)/archives/[id]/serverActions";
import { CommentPayload, CommentsPayload } from "@/db/query";
import { Container } from "@yamada-ui/react";

export default function Comment(props: {
    comments: CommentsPayload;
    copipe_id: number;
}) {
    const { comments, copipe_id } = props;
    const [optimisticComments, addOptimisticComment] = useOptimistic(
        comments,
        (state, newComent: CommentPayload) => {
            return [...state, newComent];
        },
    );

    return (
        <Container>
            <CommentList comments={optimisticComments} />
            <CommentForm
                copipe_id={copipe_id}
                addOptimisticComment={addOptimisticComment}
                postComment={postComment}
            />
        </Container>
    );
}
