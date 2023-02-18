import type { NextPage } from 'next'
import { Container, Button, Box, Grid, Card, CardContent, TextField, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import SearchAppBar from './modules/searchAppBar';
import { postAllCopipeAtom } from "./Atoms";
import { useAtom } from 'jotai';
import CopipeCard from './modules/copipeCard';
import { Search, Visibility, VisibilityOff } from '@mui/icons-material';
import SearchForm from './modules/searchForm';

const Home: NextPage = () => {

  return (
    <>
      <SearchAppBar />
      {/* <ResponsiveAppBar/> */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={7}>
            
            <SearchForm />
            <CopipeCard />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home