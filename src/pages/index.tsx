import type { NextPage } from 'next'
import { Container, Button, Box, Grid, Card, CardContent } from '@mui/material';
import SearchAppBar from './searchAppBar';
import { postAllCopipeAtom } from "./Atoms";
import { useAtom } from 'jotai';

const Home: NextPage = () => {
  const [post] = useAtom(postAllCopipeAtom)

  return (
    <>
      <SearchAppBar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent>
                  {post}
              </CardContent>
            </Card>
            {/* xs=8 */}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home