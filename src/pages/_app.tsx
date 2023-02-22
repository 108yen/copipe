import Head from 'next/head';
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';

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
        <title>
          copipe
        </title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {show_screen ? <Component {...pageProps} /> : null}
        <Analytics />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp