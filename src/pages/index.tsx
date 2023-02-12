import type { NextPage } from 'next'
import { Container, Button, Box, Grid, Card, CardContent } from '@mui/material';
import SearchAppBar from './searchAppBar';

const Home: NextPage = () => {
  return (
    <>
      <SearchAppBar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'primary.main' }}>
              <CardContent>
                xs=8
              </CardContent>
            </Card>
            {/* xs=8 */}
          </Grid>
        </Grid>
      </Box>
      {/* <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
          <Button variant="contained">Hello World</Button>
        </Box>
      </Container> */}
    </>
  )
}

export default Home