import { ReactNode, Suspense } from "react"
import { Metadata } from "next"
import GoogleAnalytics from "@/analytics/GoogleAnalytics"
import {
  ColorModeScript,
  ThemeSchemeScript,
  UIProvider,
  colorModeManager,
  themeSchemeManager,
} from "@yamada-ui/react"
import { config, theme } from "@/theme"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.netcopipe.com/"),
  title: {
    default: "copipe | コピペ検索データベース",
    template: "%s | copipe",
  },
  description:
    "2ch/5chやまとめサイトなどで話題になった有名なコピペや、笑えるコピペを収集しています。コピペの検索、投稿、コメントが可能です。",
  openGraph: {
    type: `website`,
    url: "https://www.netcopipe.com/",
    title: "copipe | コピペ検索データベース",
    description:
      "2ch/5chやまとめサイトなどで話題になった有名なコピペや、笑えるコピペを収集しています。コピペの検索、投稿、コメントが可能です。",
    images: [
      {
        url: "https://www.netcopipe.com/og.png",
        type: `image/png`,
      },
    ],
  },
  twitter: {
    card: `summary`,
  },
}

const { initialColorMode, initialThemeScheme } = { ...config }

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <Suspense>
          <GoogleAnalytics debugMode={process.env.NODE_ENV !== "production"} />
        </Suspense>
      </head>
      <body>
        <ColorModeScript
          type="cookie"
          nonce="copipe"
          initialColorMode={initialColorMode}
        />
        <ThemeSchemeScript
          type="cookie"
          nonce="copipe"
          initialThemeScheme={initialThemeScheme}
        />
        <UIProvider
          theme={theme}
          config={config}
          colorModeManager={{ ...colorModeManager }.cookieStorage}
          themeSchemeManager={{ ...themeSchemeManager }.cookieStorage}
        >
          {children}
        </UIProvider>
      </body>
    </html>
  )
}
