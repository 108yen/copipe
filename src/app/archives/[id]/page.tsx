import { Copipe } from "@/components/Atoms";
import SearchAppBar from "@/modules/searchAppBar";
import supabase from "@/utils/supabase";
import { Box, Card, CardContent, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { CopipeItemWidget } from "@/modules/copipeCard";
import { notFound } from "next/navigation";
import { cache } from "react";
import { CopipeComment } from "@/models/comment";
import React from "react";
import { formatDate } from "@/utils/formatDate";
import CommentForm from "./commentForm";

export async function generateMetadata({ params }: { params: { id: string } }) {
    const { id } = params;
    const { copipe, comments } = await getCopipe(Number(id))

    return {
        title: copipe.title
    };
}

const getCopipe = cache(async (id: number) => {
    const { data, error } = await supabase
        .from('copipe')
        .select('*, comments(*)')
        .eq("id", id)
        .maybeSingle();
    if (error) notFound();

    const copipe: Copipe = {
        id: data.id,
        inserted_at: data.inserted_at,
        updated_at: data.updated_at,
        body: data.body,
        title: data.title,
    };

    const comments: CopipeComment[] = data.comments.map(
        (comment: CopipeComment) => new CopipeComment({
            id: comment.id,
            created_at: comment.created_at,
            copipe_id: comment.copipe_id,
            body: comment.body
        })
    )

    return { copipe, comments };
});

function ArchiveBody(props: { copipe: Copipe }) {
    const { copipe } = props;

    return (
        <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} md={10} lg={8} xl={6}>
                <Card
                    sx={{
                        m: { xs: 1, sm: 2 }
                    }}
                >
                    <CardContent>
                        <CopipeItemWidget id={copipe.id} inserted_at={copipe.inserted_at} updated_at={copipe.updated_at} body={copipe.body} title={copipe.title} />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

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

function Comments(props: { comments: CopipeComment[], copipe_id: number }) {
    const { comments, copipe_id } = props;

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} md={10} lg={8} xl={6}>
                <Card
                    sx={{
                        m: { xs: 1, sm: 2 }
                    }}
                >
                    <CardContent>
                        <List>
                            {comments.map((comment, index) =>
                            (
                                <React.Fragment key={comment.id}>
                                    <CommentItem comment={comment} />
                                    {index < comments.length - 1 && <Divider variant="middle" />}
                                </React.Fragment>
                            ))}
                        </List>
                        <CommentForm copipe_id={copipe_id} />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default async function Page({ params }: { params: { id: string } }) {
    const id = Number(params.id);
    const { copipe, comments } = await getCopipe(id)

    return (
        <>
            <SearchAppBar />
            <ArchiveBody copipe={copipe} />
            <Comments comments={comments} copipe_id={id} />
        </>
    );
}