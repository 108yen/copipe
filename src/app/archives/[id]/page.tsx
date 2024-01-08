import { Copipe } from "@/models/copipe";
import supabase from "@/utils/supabase";
import { Card, CardContent, Grid } from "@mui/material";
import { CopipeItemWidget } from "@/modules/copipeCard";
import { notFound } from "next/navigation";
import { cache } from "react";
import { CopipeComment } from "@/models/comment";
import React from "react";
import { Comments } from "./commentList";
import PageNation from "./pageNation";

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
    if (data == null) notFound();

    const copipe: Copipe = {
        id: data.id,
        inserted_at: data.inserted_at,
        updated_at: data.updated_at,
        body: data.body,
        title: data.title,
    };

    const comments: CopipeComment[] = data.comments.map((comment: CopipeComment) => {
        return {
            id: comment.id,
            created_at: new Date(comment.created_at!),
            copipe_id: comment.copipe_id,
            body: comment.body
        } as CopipeComment
    })

    return { copipe, comments };
});

function ArchiveBody(props: { copipe: Copipe }) {
    const { copipe } = props;

    return (
        <Card
            sx={{
                m: { xs: 1, sm: 2 }
            }}
        >
            <CardContent>
                <CopipeItemWidget id={copipe.id} inserted_at={copipe.inserted_at} updated_at={copipe.updated_at} body={copipe.body} title={copipe.title} />
            </CardContent>
        </Card>
    );
}

export default async function Page({ params }: { params: { id: string } }) {
    const id = Number(params.id);
    const { copipe, comments } = await getCopipe(id)

    return (
        <Grid container justifyContent="center" spacing={2}>
            <Grid item zeroMinWidth xs={12} md={10} lg={8} xl={6}>
                <ArchiveBody copipe={copipe} />
                <Comments comments={comments} copipe_id={id} />
                <PageNation copipe_id={id} />
            </Grid>
        </Grid>
    );
}