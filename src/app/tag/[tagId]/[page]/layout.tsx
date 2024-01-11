import supabase from "@/utils/supabase"
import { notFound } from "next/navigation"
import { ReactNode } from "react"
import TagPageNation from "./tagPageNation"
import AdmaxUnderSwitch from "@/ad/admax/underSwitch"

export async function generateMetadata({ params }: { params: { tagId: string } }) {
    const tagId = Number(params.tagId)
    const { data, error } = await supabase
        .from('tag')
        .select('body')
        .eq('id', tagId)
        .single()
    if (error) notFound()
    if (data === null) notFound()

    return {
        title: data.body
    }
}

export default async function layout({ params, children }: {
    children: ReactNode,
    params: { tagId: string, page: string }
}) {
    const tagId = Number(params.tagId)
    const page = Number(params.page)

    const { data, error, status, count } = await supabase
        .from('_copipeToTag')
        .select('*', { count: 'exact', head: true })
        .eq('tag_id', tagId)
    if (error) notFound()

    return (
        <>
            {children}
            <AdmaxUnderSwitch />
            <TagPageNation tagId={tagId} page={page} count={count} />
        </>
    )

}