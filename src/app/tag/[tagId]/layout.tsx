import supabase from "@/utils/supabase"
import { notFound } from "next/navigation"
import { ReactNode } from "react"
import AdmaxUnderSwitch from "@/ad/admax/underSwitch"
import CopipePagination from "@/modules/copipePagination"

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

export default async function layout({ params, searchParams, children }: {
    children: ReactNode,
    params: { tagId: string },
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const tagId = Number(params.tagId)
    const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

    const { error, count } = await supabase
        .from('_copipeToTag')
        .select('*', { count: 'exact', head: true })
        .eq('tag_id', tagId)
    if (error) notFound()

    return (
        <>
            {children}
            <AdmaxUnderSwitch />
            {/* <TagPageNation tagId={tagId} page={page} count={count} /> */}
            <CopipePagination url={`/tag/${tagId}`} total={Math.ceil((count ?? 0) / 10)} page={page} />
        </>
    )

}