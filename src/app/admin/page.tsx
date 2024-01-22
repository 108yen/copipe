import { CopipeWithTag } from "@/models/copipeWithTag";
import supabase from "@/utils/supabase"
import { Tag } from "@/models/tag"
import AdminPageTemplate from "@/modules/admin";
import CopipePagination from "@/modules/copipePagination";
import { notFound } from "next/navigation";
import { VStack } from "@yamada-ui/react";

export const revalidate = 3600

export default async function Page({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const page = typeof searchParams.page === 'string'
        ? Number(searchParams.page) : 1
    const { data, error, status, count } = await supabase
        .from('copipe_with_tag')
        .select('*', { count: 'exact' })
        .order('copipe_id', { ascending: false })
        .range((page - 1) * 100, 100 * page - 1);

    if (error) notFound()
    const copipes: CopipeWithTag[] = data!.map(value => {
        return {
            copipe_id: value.copipe_id,
            body: value.body,
            title: value.title,
            tags: value.tags
        }
    })

    const fetchTags = await supabase
        .from('tag')
        .select('*');
    const tags: Tag[] = fetchTags.data!.map(value => {
        return {
            id: value.id,
            created_at: new Date(value.created_at),
            body: value.body
        }
    })
    return (
        <VStack>
            <AdminPageTemplate copipes={copipes} tags={tags} />
            <CopipePagination
                url="/admin"
                total={count ? Math.ceil(count / 100) : 0}
                page={page} />
        </VStack>
    )
}