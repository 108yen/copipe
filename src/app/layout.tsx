import { ReactNode, Suspense } from "react";
import { Metadata } from 'next'
import GoogleAnalytics from "@/analytics/GoogleAnalytics";
import { headers } from 'next/headers'
import Provider from "./provider";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.netcopipe.com/"),
    title: {
        default: 'copipe | コピペ検索データベース',
        template: '%s | copipe'
    },
    description: "2ch/5chやまとめサイトなどで話題になった有名なコピペや、笑えるコピペを収集しています。コピペの検索、投稿、コメントが可能です。",
    openGraph: {
        type: `website`,
        url: "https://www.netcopipe.com/",
        title: "copipe | コピペ検索データベース",
        description: "2ch/5chやまとめサイトなどで話題になった有名なコピペや、笑えるコピペを収集しています。コピペの検索、投稿、コメントが可能です。",
        images: [
            {
                url: "https://www.netcopipe.com/og.png",
                type: `image/png`
            },
        ],
    },
    twitter: {
        card: `summary`
    }
}

export default async function RootLayout({
    children
}: {
    children: ReactNode
}) {
    const header = headers()
    const ip = (header.get(`x-forwarded-for`) ?? ``).split(`,`)[0]

    return (
        <html lang="ja">
            <head>
                <Suspense>
                    <GoogleAnalytics debugMode={process.env.NODE_ENV !== "production"} clientIp={ip} />
                </Suspense>
            </head>
            <body>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    )
}