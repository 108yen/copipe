import type { NextPage } from 'next'
import { Box, Grid } from '@mui/material';
import SearchAppBar from './modules/searchAppBar';
import { Copipe, copipeListAtom, pageNumAtom, searchTextAtom } from "../components/Atoms";
import { useAtom } from 'jotai';
import CopipeCard from './modules/copipeCard';
import SearchForm from './modules/searchForm';
import supabase from '@/utils/supabase';
import { useEffect } from 'react';
import BasicPagination from './modules/basicPagination';

const postCopipe = async (word: string, page: number) => {
  const { data, error } = await supabase
    .from('copipe')
    .select()
    .like('body', '%' + word + '%')
    .order('id', { ascending: false })
    .range(10 * (page - 1), 9 + 10 * (page - 1));
  if (error) console.log('post copipe error', error);

  const copipes: Array<Copipe> = data != null ? data.map(e => {
    const copipeItem: Copipe = {
      id: e.id,
      inserted_at: e.inserted_at,
      updated_at: e.updated_at,
      body: e.body,
      title: e.title,
    };
    return copipeItem;
  }) : [];

  return copipes;
}

const calcPageNum = async (word: string) => {
  const copipeRow = await countCopipeRows(word);
  return Math.ceil(copipeRow / 10);
}

const countCopipeRows = async (word: string) => {
  const { data, error, status, count } = await supabase
    .from('copipe')
    .select('*', { count: 'exact', head: true })
    .like('body', '%' + word + '%');
  if (error) console.log('copipe row count error', error);
  
  return count ?? 0;
}

const Home: NextPage = () => {
  const [copipeList, setCopipeList] = useAtom(copipeListAtom);
  const [pageNum, setPageNum] = useAtom(pageNumAtom);
  const [searchText, setSearchText] = useAtom(searchTextAtom);

  useEffect(() => {
    async function fetchData() {
      setCopipeList(await postCopipe(searchText, 1));
      setPageNum(await calcPageNum(searchText));
    }
    fetchData();
  }, [searchText]);

  return (
    <>
      <SearchAppBar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={7}>
            {/* 検索したときにページネーションがそのままになる */}
            <SearchForm setSearchText={setSearchText} />
            <CopipeCard copipeList={copipeList} />
            <BasicPagination
              pageNum={pageNum}
              setCopipeList={
                async (page: number) => {
                  await setCopipeList(await postCopipe(searchText, page))
                }
              } />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home