import AdmaxUnderSwitch from "@/ad/admax/underSwitch";
import { CopipeWithTag } from "@/models/copipeWithTag";
import CopipeCard from "@/modules/copipeCard";
import { CopipeCardItem } from "@/modules/copipeCardItem";
import CopipePagination from "@/modules/copipePagination";
import SearchForm from "@/modules/searchForm";
import supabase from "@/utils/supabase";
import { cache } from "react";

const getHomePageCopipe = cache(async () => {
  const { data, error, count } = await supabase
    .from('copipe_with_tag')
    .select('*', { count: 'exact' })
    .order('copipe_id', { ascending: false })
    .range(0, 9);
  if (error) console.log('fetch copipe error in /:', error);
  else console.log('fetch copipe in /')

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

export const revalidate = 86400;

export default async function Home() {
  const { copipes, count } = await getHomePageCopipe()

  return (
    <>
      <SearchForm />
      <CopipeCard>
        {copipes.map(copipe => <CopipeCardItem key={`copipe-card-item-${copipe.copipe_id}`} copipeItem={copipe} />)}
      </CopipeCard>
      <AdmaxUnderSwitch />
      <CopipePagination url="/search" total={Math.ceil(count / 10)} page={1} />
    </>
  )
}