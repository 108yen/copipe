'use client'

import { CopipeComment } from "@/models/comment";
import { formatDate } from "@/utils/formatDate";
import React, { useOptimistic } from "react";
import CommentForm from "./commentForm";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";


//別ファイルにするとなぜがエラーが出る
function CommentItem(props: { comment: CopipeComment }) {
    const { comment } = props;

    return (
        <ListItem alignItems="flex-start">
            <ListItemText
                primary={
                    <Typography variant="caption" color="grey">
                        {`${formatDate(comment.created_at!)}`}
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
        <Card
            sx={{
                m: { xs: 1, sm: 2 }
            }}
        >
            <CardContent>
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
            </CardContent>
        </Card>
    )
}