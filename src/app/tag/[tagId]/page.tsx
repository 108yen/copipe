import AdmaxUnderSwitch from "@/ad/admax/underSwitch"
import { CopipeWithTag } from "@/models/copipeWithTag"
import CopipeCard from "@/modules/copipeCard"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import CopipePagination from "@/modules/copipePagination"
import supabase from "@/utils/supabase"
import { VStack } from "@yamada-ui/react"
import { notFound } from "next/navigation"

export default async function page({ params, searchParams }: {
    params: { tagId: string },
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const tagId = Number(params.tagId)
    const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

    const { data, count, error } = await supabase
        .from('_copipeToTag')
        .select('*,copipe_with_tag(*)', { count: 'exact' })
        .eq('tag_id', tagId)
        .order('copipe_id', { ascending: true })
        .range((page - 1) * 10, 10 * page - 1)
    if (error) notFound()

    const copipe: CopipeWithTag[] = data.map(
        value => {
            return {
                copipe_id: value.copipe_with_tag.copipe_id,
                title: value.copipe_with_tag.title,
                body: value.copipe_with_tag.body,
                tags: value.copipe_with_tag.tags
            }
        }
    )

    return (
        <VStack>
            <CopipeCard>
                {copipe.map((e) => <CopipeCardItem key={e.copipe_id} copipeItem={e} />)}
            </CopipeCard>
            <AdmaxUnderSwitch />
            <CopipePagination url={`/tag/${tagId}`} total={Math.ceil((count ?? 0) / 10)} page={page} />
        </VStack>
    )

}