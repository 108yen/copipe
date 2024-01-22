import { Tag } from "@/models/tag"
import supabase from "@/utils/supabase"
import { cache } from "react"
import LoadingTagListCard from "./loading"
import TagListCardTemplate from "./tagListCard"

const fetchTags = cache(async () => {
    console.log('tag get')
    return await supabase
        .from('tag')
        .select()
})

export default async function TagListCard() {
    const { data, error } = await fetchTags()
    if (data == null) return <LoadingTagListCard />

    const tags: Tag[] = data.map(
        tag => {
            return {
                id: tag.id,
                created_at: new Date(tag.created_at),
                body: tag.body
            }
        }
    )

    return <TagListCardTemplate tags={tags} />
}