import type { NextPage } from 'next'
import { Box, Grid } from '@mui/material';
import SearchAppBar from '../modules/searchAppBar';
import { Copipe, copipeListAtom, pageAtom, pageNumAtom, searchTextAtom } from "../components/Atoms";
import { useAtom } from 'jotai';
import CopipeCard from '../modules/copipeCard';
import SearchForm from '../modules/searchForm';
import supabase from '@/utils/supabase';
import { useEffect } from 'react';
import BasicPagination from '../modules/basicPagination';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

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
  const [page, setPage] = useAtom(pageAtom);
  const [searchText, setSearchText] = useAtom(searchTextAtom);
  const router = useRouter();
  const { p } = router.query;

  useEffect(() => {
    if (router.isReady) {
      if (p != undefined && typeof p === 'string' && isStringInt(p)) {
        const postPage = Number(p);
        setPage(postPage);
        fetch(postPage, searchText);
      }
    }
  }, [router]);

  useEffect(() => {
    if (router.isReady) {
      fetch(page, searchText);
    }
  }, [page, searchText])

  async function fetch(page: number, searchText: string) {
    const fetchPageNum = await calcPageNum(searchText);
    setPageNum(fetchPageNum);
    if (page <= fetchPageNum) {
      setCopipeList(await postCopipe(searchText, page));
    } else {
      setPage(1);
    }
  }

  function isStringInt(value: string): boolean {
    const intValue = Number(value)
    return Number.isInteger(intValue)
  }

  const headDiscription = (copipeList: Array<Copipe>) => {
    return copipeList.length != 0 ? copipeList[0].body : "";
  }

  return (
    <>
      <NextSeo
        title={"copipe | " + (searchText == "" ? "2chコピペネタ帳" : searchText)}
        description={"2ch/5chやまとめサイトなどで話題になった有名なコピペや、笑えるコピペを収集しています。" + headDiscription(copipeList)}
        canonical={"https://www.netcopipe.com?p=" + page}
        openGraph={{
          url: "https://www.netcopipe.com/",
          title: "copipe | 2chコピペネタ帳",
          description: "コピペが検索できるサイト。",
          images: [
            {
              url: "https://www.netcopipe.com/android-chrome-512x512.png",
            },
          ],
        }}
      />
      <ArticleJsonLd
        url="https://www.netcopipe.com/"
        title="copipe | 2chコピペネタ帳"
        images={["https://www.netcopipe.com/android-chrome-512x512.png"]}
        datePublished="20230226"
        dateModified="20230226"
        authorName="108yen"
        publisherName="108yen"
        publisherLogo=""
        description="投稿されているコピペの閲覧、コピペの検索が可能なページ"
      />
      <SearchAppBar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={10} lg={8} xl={6}>
            <SearchForm setSearchText={setSearchText} />
            <CopipeCard copipeList={copipeList} />
            <BasicPagination
              pageNum={pageNum}
              currentPage={page}
              setCurrentPage={
                async (page: number) => {
                  await setPage(page);
                }
              }
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home