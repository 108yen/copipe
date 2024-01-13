import { ReactNode, Suspense } from "react";
import { Metadata } from 'next'
import ThemeRegistry from "@/theme/themeRegistry";
import SearchAppBar from "@/modules/searchAppBar";
import Grid from "@mui/material/Grid";
import AdmaxPCSideVertical from "@/ad/admax/pcSideVertical";
import GoogleAnalytics from "@/analytics/GoogleAnalytics";
import { headers } from 'next/headers'
import { getServerSession } from "next-auth";
import { options } from "@/auth/auth.config";

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
    children,
    tagListCard,
    recentPostsCard
}: {
    children: ReactNode,
    tagListCard: ReactNode,
    recentPostsCard: ReactNode,
}) {
    const header = headers()
    const ip = (header.get(`x-forwarded-for`) ?? ``).split(`,`)[0]

    //admin繊維用
    const session = await getServerSession(options)
    const isVisibleAdminButton = session?.user?.email === 'kazuking.1911@gmail.com'

    return (
        <html lang="ja">
            <head>
                <Suspense>
                    <GoogleAnalytics debugMode={process.env.NODE_ENV !== "production"} clientIp={ip} />
                </Suspense>
            </head>
            <body>
                <ThemeRegistry options={{ key: `css`, prepend: true }}>
                    <SearchAppBar isVisibleAdminButton={isVisibleAdminButton} />
                    <Grid container justifyContent="center" spacing={1} marginY={1}>
                        <Grid item xs={12} md={9} lg={8} xl={6}>
                            {children}
                        </Grid>
                        <Grid item md={2} display={{ md: 'block', xs: 'none' }}>
                            <AdmaxPCSideVertical />
                            {tagListCard}
                            {recentPostsCard}
                        </Grid>
                    </Grid>
                </ThemeRegistry>
            </body>
        </html>
    )
}