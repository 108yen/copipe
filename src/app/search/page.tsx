import { CopipeWithTag } from "@/models/copipeWithTag";
import CopipeCard from "@/modules/copipeCard";
import { CopipeCardItem } from "@/modules/copipeCardItem";
import supabase from "@/utils/supabase";
import SearchPagination from "./searchPagination";
import AdmaxUnderSwitch from "@/ad/admax/underSwitch";

export const metadata = {
    title: '検索'
}

export default async function page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const searchText = typeof searchParams.text === 'string' ? searchParams.text : ''
    const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

    const { data, error, count } = await supabase
        .from('copipe_with_tag')
        .select('*', { count: 'exact' })
        .like('body', `%${searchText}%`)
        .order('copipe_id', { ascending: false })
        .range(10 * (page - 1), 9 + 10 * (page - 1));
    if (error) console.log('search copipe error', error);

    const copipes: Array<CopipeWithTag> = data != null ? data.map(e => {
        const copipeItem: CopipeWithTag = {
            copipe_id: e.copipe_id,
            body: e.body,
            title: e.title,
            tags: e.tags
        };
        return copipeItem;
    }) : [];

    return (
        <>
            <CopipeCard>
                {copipes.map(copipe => <CopipeCardItem key={copipe.copipe_id} copipeItem={copipe} />)}
            </CopipeCard>
            <AdmaxUnderSwitch />
            <SearchPagination searchText={searchText} count={Math.ceil(count ?? 0 / 10)} page={page} />
        </>
    );
}