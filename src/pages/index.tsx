import type { NextPage } from 'next'
import { Container, Button, Box } from '@mui/material';
import SearchAppBar from './searchAppBar';

const Home: NextPage = () => {
  return (
    <>
      <SearchAppBar />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
          <Button variant="contained">Hello World</Button>
        </Box>
      </Container>
    </>
  )
}

export default Home