import type { NextPage } from 'next'
import { Container, Button, Box, Grid, Card, CardContent, TextField, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import SearchAppBar from './modules/searchAppBar';
import { Copipe, CopipeListAtom, postAllCopipeAtom } from "./Atoms";
import { useAtom } from 'jotai';
import CopipeCard from './modules/copipeCard';
import { Search, Visibility, VisibilityOff } from '@mui/icons-material';
import SearchForm from './modules/searchForm';

const Home: NextPage = () => {
  const [copipeList, setCopipeList] = useAtom(CopipeListAtom);


  return (
    <>
      <SearchAppBar />
      {/* <ResponsiveAppBar/> */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={7}>
            {SearchForm(setCopipeList)}
            {CopipeCard(copipeList)}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home