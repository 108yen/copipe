import AdmaxUnderSwitch from "@/ad/admax/underSwitch";
import { CopipeWithTag } from "@/models/copipeWithTag";
import CopipeCard from "@/modules/copipeCard";
import { CopipeCardItem } from "@/modules/copipeCardItem";
import SearchForm from "@/modules/searchForm";
import supabase from "@/utils/supabase";
import { cache } from "react";
import SearchPagination from "./search/searchPagination";

const getHomePageCopipe = cache(async () => {
  const { data, error, count } = await supabase
    .from('copipe_with_tag')
    .select('*', { count: 'exact' })
    .order('copipe_id', { ascending: false })
    .range(0, 9);
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

  return { copipes, count: count ?? 0 }
})

export const revalidate = 86400

export default async function Home() {
  const { copipes, count } = await getHomePageCopipe()

  return (
    <>
      <SearchForm />
      <CopipeCard>
        {copipes.map(copipe => <CopipeCardItem key={`copipe-card-item-${copipe.copipe_id}`} copipeItem={copipe} />)}
      </CopipeCard>
      <AdmaxUnderSwitch />
      <SearchPagination searchText="" count={Math.ceil(count / 10)} page={1} />
    </>
  )
}