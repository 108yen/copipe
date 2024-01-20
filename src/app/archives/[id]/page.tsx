import supabase from "@/utils/supabase";
import { notFound } from "next/navigation";
import { cache } from "react";
import { CopipeComment } from "@/models/comment";
import React from "react";
import { Comments } from "./commentList";
import PageNation from "./pageNation";
import AdmaxUnderSwitch from "@/ad/admax/underSwitch";
import { CopipeWithTag } from "@/models/copipeWithTag";
import { CopipeCardItem } from "@/modules/mui/copipeCardItem";
import CopipeCard from "@/modules/mui/copipeCard";

const getCopipeIds = cache(async () => {
    const { data, error } = await supabase
        .from('copipe_with_tag')
        .select('copipe_id')
    if (error) console.log(`fetch copipe_id for pagination in archives/[id] error: ${error}`)
    if (data == null) throw new Error("copipe_id[] is null");
    else console.log(`fetch copipe_id for pagination in archives/[id]`)

    return data
})

async function checkBeforeAndAfterPage(currendId: number) {
    const data = await getCopipeIds()

    const copipeIds: number[] = data.map(value => value.copipe_id as number)
    const currendIdIndex = copipeIds.findIndex(value => value == currendId)
    const beforeId = currendIdIndex == 0 ? -1 : copipeIds[currendIdIndex - 1];
    const afterId = currendIdIndex == copipeIds.length - 1 ? -1 : copipeIds[currendIdIndex + 1];
    return { beforeId, afterId }
}

const getCopipe = cache(async (id: number) => {
    const { data, error } = await supabase
        .from('copipe_with_tag')
        .select('*, comments(*)')
        .eq("copipe_id", id)
        .maybeSingle();
    if (error) notFound();
    else console.log(`fetch copipe in archives/${id}`)
    if (data == null) notFound();

    const copipe: CopipeWithTag = {
        copipe_id: data.id,
        body: data.body,
        title: data.title,
        tags: data.tags
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

function ArchiveBody(props: { copipe: CopipeWithTag }) {
    const { copipe } = props;

    return (
        <CopipeCard>
            <CopipeCardItem copipeItem={copipe} />
        </CopipeCard>
    );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
    const { id } = params;
    const { copipe, comments } = await getCopipe(Number(id))

    return {
        title: copipe.title
    };
}

export default async function Page({ params }: { params: { id: string } }) {
    const id = Number(params.id);
    const { copipe, comments } = await getCopipe(id)
    const { beforeId, afterId } = await checkBeforeAndAfterPage(id)

    return (
        <>
            <ArchiveBody copipe={copipe} />
            <Comments comments={comments} copipe_id={id} />
            <AdmaxUnderSwitch />
            <PageNation beforeId={beforeId} afterId={afterId} />
        </>
    );
}