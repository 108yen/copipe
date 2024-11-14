import GoogleAnalytics from "@/analytics/GoogleAnalytics"
import { config, theme } from "@/theme"
import { YamadaUIScript } from "@/utils/yamada-ui-script"
import { UIProvider } from "@yamada-ui/react"
import { Metadata } from "next"
import { ReactNode, Suspense } from "react"

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

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <Suspense>
          <GoogleAnalytics debugMode={process.env.NODE_ENV !== "production"} />
        </Suspense>
      </head>
      <body suppressHydrationWarning>
        <YamadaUIScript />

        <UIProvider theme={theme} config={config}>
          {children}
        </UIProvider>
      </body>
    </html>
  )
}
