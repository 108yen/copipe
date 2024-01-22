import { CopipeWithTag } from "@/models/copipeWithTag";
import supabase from "@/utils/supabase";
import AdmaxUnderSwitch from "@/ad/admax/underSwitch";
import { Text, VStack } from "@yamada-ui/react";
import SearchForm from "@/modules/searchForm";
import CopipeCard from "@/modules/copipeCard";
import { CopipeCardItem } from "@/modules/copipeCardItem";
import CopipePagination from "@/modules/copipePagination";

export const metadata = {
    title: '検索'
}

function NotHit() {
    return (
        <Text variant="body1" w='full' textAlign='center' color='grey'>
            該当なし
        </Text>
    )
}

export default async function page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const searchText = typeof searchParams.text === 'string' ? searchParams.text : ''
    const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

    const { data, error, count } = await supabase
        .from('copipe_with_tag')
        .select('*', { count: 'exact' })
        .like('body', `%${searchText}%`)
        .order('copipe_id', { ascending: false })
        .range(10 * (page - 1), 9 + 10 * (page - 1));
    if (error) console.log('search copipe error in search/', error);
    else console.log('fetch search copipe in search/', error);

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
        <VStack>
            <SearchForm />
            <CopipeCard>
                {copipes.length == 0
                    ? <NotHit />
                    : copipes.map(copipe => <CopipeCardItem key={copipe.copipe_id} copipeItem={copipe} />)}
            </CopipeCard>
            <AdmaxUnderSwitch />
            <CopipePagination url="/search" params={{ name: 'text', param: searchText }} total={Math.ceil((count ?? 0) / 10)} page={page} />
        </VStack>
    );
}