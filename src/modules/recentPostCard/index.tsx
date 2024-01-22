import supabase from "@/utils/supabase";
import { cache } from "react";
import RecentPostsCardTemplate from "./recentPostCard";
import LoadingRecentPostsCard from "./loading";

const fetchRecentCopipes = cache(async () => {
    console.log('get recent copipes')
    return await supabase
        .from('copipe_with_tag')
        .select('copipe_id, title')
        .order('copipe_id', { ascending: false })
        .range(0, 99);
})


export default async function RecentPostsCard() {
    const { data, error } = await fetchRecentCopipes()
    if (data == null) return <LoadingRecentPostsCard />

    const copipes: { id: number, title: string }[] = data.map(value => {
        return {
            id: value.copipe_id,
            title: value.title
        }
    })

    return <RecentPostsCardTemplate copipes={copipes} />
}