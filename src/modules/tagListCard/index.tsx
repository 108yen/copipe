import { Tag } from "@/models/tag"
import { cache } from "react"
import TagListCardTemplate from "./tagListCard"
import { prisma } from "@/db/db"

const fetchTags = cache(async () => {
    const tags = await prisma.tag.findMany()
    console.log('tag get')
    return tags
})

export default async function TagListCard() {
    const data = await fetchTags()

    const tags: Tag[] = data.map(
        tag => {
            return {
                id: Number(tag.id),
                created_at: new Date(tag.created_at),
                body: tag.body
            }
        }
    )

    return <TagListCardTemplate tags={tags} />
}