import { CopipeWithTag } from "@/models/copipeWithTag";
import supabase from "@/utils/supabase"
import { Tag } from "@/models/tag";
import PageTemplate from "./pageTemplate";


export default async function Page() {
    const fetchCopipeWithTag = await supabase
        .from('copipe_with_tag')
        .select('*')
        .range(0, 10);
    const copipes: CopipeWithTag[] = fetchCopipeWithTag.data!.map(value => {
        return {
            copipe_id: value.copipe_id,
            body: value.body,
            title: value.title,
            tag_bodies: value.tag_bodies
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

    return <PageTemplate copipes={copipes} tags={tags}/>
}