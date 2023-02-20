import type { NextPage } from 'next'
import { Container, Button, Box, Grid, Card, CardContent, TextField, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import SearchAppBar from './modules/searchAppBar';
import { Copipe, copipeListAtom, pageNumAtom } from "../components/Atoms";
import { useAtom } from 'jotai';
import CopipeCard from './modules/copipeCard';
import { Search, Visibility, VisibilityOff } from '@mui/icons-material';
import SearchForm from './modules/searchForm';
import supabase from '@/utils/supabase';
import { useEffect } from 'react';
import router from 'next/router';
import theme from '@/theme';
import BasicPagination from './modules/basicPagination';

const postAllCopipe = async () => {
  const { data, error } = await supabase
    .from('copipe')
    .select()
    .order('id', { ascending: false })
    .range(0, 9);
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

const calcPageNum = async () => {
  const copipeRow = await countCopipeRows();
  return Math.ceil(copipeRow / 10);
}

const countCopipeRows = async () => {
  const { data, error, status, count } = await supabase
    .from('copipe')
    .select('*', { count: 'exact', head: true });
  return count ?? 0;
}

const Home: NextPage = () => {
  const [copipeList, setCopipeList] = useAtom(copipeListAtom);
  const [pageNum, setPageNum] = useAtom(pageNumAtom);

  useEffect(() => {
    async function fetchData() {
      setCopipeList(await postAllCopipe());
      setPageNum(await calcPageNum());
    }
    fetchData();
  }, []);

  return (
    <>
      <SearchAppBar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={7}>
            {SearchForm(setCopipeList)}
            {CopipeCard(copipeList)}
            {BasicPagination(pageNum, setCopipeList)}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home