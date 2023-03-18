import type { NextPage } from 'next'
import { Box, Grid } from '@mui/material';
import SearchAppBar from '../modules/searchAppBar';
import CopipeCard from '../modules/copipeCard';
import SearchForm from '../modules/searchForm';
import BasicPagination from '../modules/basicPagination';
import { ArticleJsonLd, NextSeo } from 'next-seo';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="copipe | 2chコピペネタ帳" //アーカイブとかでもよいかもしれん
        description="2ch/5chやまとめサイトなどで話題になった有名なコピペや、笑えるコピペを収集しています。"
        canonical="https://www.netcopipe.com"
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
      <Box sx={{
        flexGrow: 1,
        p: { xs: 0, sm: 3 }
      }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={10} lg={8} xl={6}>
            <SearchForm />
            <CopipeCard />
            <BasicPagination />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home