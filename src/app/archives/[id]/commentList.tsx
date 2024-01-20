'use client'

import { CopipeComment } from "@/models/comment";
import React, { useOptimistic } from "react";
import CommentForm from "./commentForm";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import CopipeCard from "@/modules/mui/copipeCard";
import dayjs from "@/utils/dayjs";

function CommentItem(props: { comment: CopipeComment }) {
    const { comment } = props;

    return (
        <ListItem alignItems="flex-start">
            <ListItemText
                primary={
                    <Typography variant="caption" color="grey">
                        {`${dayjs(comment.created_at!).format('YYYY/MM/DD HH:mm:ss')}`}
                    </Typography>
                }
                secondary={
                    <Typography sx={{ whiteSpace: "pre-line" }}>
                        {comment.body}
                    </Typography>
                }
            />
        </ListItem>
    );
}

export function Comments(props: { comments: CopipeComment[], copipe_id: number }) {
    const { comments, copipe_id } = props;
    const [optimisticComments, addOptimisticComment] = useOptimistic(
        comments,
        (state, newComent: CopipeComment) => {
            return [...state, newComent]
        }
    )

    return (
        <CopipeCard>
            <List>
                {optimisticComments.map((comment, index) =>
                (
                    <React.Fragment key={comment.id}>
                        <CommentItem comment={comment} />
                        {index < comments.length - 1 && <Divider variant="middle" />}
                    </React.Fragment>
                ))}
            </List>
            <CommentForm copipe_id={copipe_id} addOptimisticComment={addOptimisticComment} />
        </CopipeCard>
    )
}