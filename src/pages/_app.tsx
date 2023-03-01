import Head from 'next/head';
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';
import { DefaultSeo } from 'next-seo';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [show_screen, setShowScreen] = useState(false)

  useEffect(() => {
    setShowScreen(true)
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <DefaultSeo
        defaultTitle='copipe'
        description='コピペが検索できるサイト'
        
        openGraph={{
          type: 'website',
          title: 'copipe',
          description: 'コピペが検索できるサイト',
          siteName: 'copipe',
          url: 'https://www.netcopipe.com/',
          images: [
            {
              url: "https://www.netcopipe.com/android-chrome-512x512.png",
              width: 512,
              height: 512,
              alt: 'Og Image Alt',
              type: 'image/png',
            }
          ]
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: "summary_large_image",
        }}
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {show_screen ? <Component {...pageProps} /> : null}
        <Analytics />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp