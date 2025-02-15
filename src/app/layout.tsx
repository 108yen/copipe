import GoogleAnalytics from "@/analytics/GoogleAnalytics"
import AppBar from "@/modules/appBar"
import { config, theme } from "@/theme"
import { YamadaUIScript } from "@/utils/yamada-ui-script"
import { UIProvider } from "@yamada-ui/react"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  description:
    "2ch/5chやまとめサイトなどで話題になった有名なコピペや、笑えるコピペを収集しています。コピペの検索、投稿、コメントが可能です。",
  metadataBase: new URL("https://www.netcopipe.com/"),
  openGraph: {
    description:
      "2ch/5chやまとめサイトなどで話題になった有名なコピペや、笑えるコピペを収集しています。コピペの検索、投稿、コメントが可能です。",
    images: [
      {
        type: `image/png`,
        url: "https://www.netcopipe.com/og.png",
      },
    ],
    title: "copipe | コピペ検索データベース",
    type: `website`,
    url: "https://www.netcopipe.com/",
  },
  title: {
    default: "copipe | コピペ検索データベース",
    template: "%s | copipe",
  },
  twitter: {
    card: `summary`,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <YamadaUIScript />

        <UIProvider config={config} theme={theme}>
          <AppBar />
          {children}
        </UIProvider>

        <GoogleAnalytics debugMode={process.env.NODE_ENV !== "production"} />
      </body>
    </html>
  )
}
