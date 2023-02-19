import type { NextPage } from 'next'
import { Container, Button, Box, Grid, Card, CardContent, TextField, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import SearchAppBar from './modules/searchAppBar';
import { Copipe, copipeListAtom } from "../components/Atoms";
import { useAtom } from 'jotai';
import CopipeCard from './modules/copipeCard';
import { Search, Visibility, VisibilityOff } from '@mui/icons-material';
import SearchForm from './modules/searchForm';
import supabase from '@/utils/supabase';
import { useEffect } from 'react';
import router from 'next/router';
import theme from '@/theme';

const postAllCopipe = async () => {
  const { data, error } = await supabase
    .from('copipe')
    .select('*')
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
  // console.log('実行');

  return copipes;
}

const Home: NextPage = () => {
  const [copipeList, setCopipeList] = useAtom(copipeListAtom);

  useEffect(() => {
    async function fetchData() {
      setCopipeList(await postAllCopipe());
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
            {CopipeCard(Object.values(copipeList))}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home