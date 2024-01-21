import { CopipeWithTag } from "@/models/copipeWithTag";
import supabase from "@/utils/supabase"
import { Tag } from "@/models/tag"
import AdminPageTemplate from "@/modules/admin";

export default async function Page({ params }: { params: { page: string } }) {
    const page = Number(params.page)
    const fetchCopipeWithTag = await supabase
        .from('copipe_with_tag')
        .select('*')
        .order('copipe_id', { ascending: false })
        .range((page - 1) * 100, 100 * page - 1);
    const copipes: CopipeWithTag[] = fetchCopipeWithTag.data!.map(value => {
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
    return <AdminPageTemplate copipes={copipes} tags={tags} />
}