import { cache } from "react";
import RecentPostsCardTemplate from "./recentPostCard";
import { prisma } from "@/db/db";

const fetchRecentCopipes = cache(async () => {
    const copipes = await prisma.copipe.findMany({
        select: {
            id: true,
            title: true
        },
        take: 100,
        orderBy: { id: 'desc' }
    })
    console.log('get recent copipes')
    return copipes
})


export default async function RecentPostsCard() {
    const data = await fetchRecentCopipes()

    const copipes: { id: number, title: string }[] = data.map(value => {
        return {
            id: Number(value.id),
            title: value.title!
        }
    })

    return <RecentPostsCardTemplate copipes={copipes} />
}