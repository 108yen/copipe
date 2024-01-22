import { ReactNode, Suspense } from "react";
import { Metadata } from 'next'
import GoogleAnalytics from "@/analytics/GoogleAnalytics";
import { headers } from 'next/headers'
import AdmaxPCSideVertical from "@/ad/admax/pcSideVertical";
import { Grid, GridItem, SimpleGrid, VStack } from "@yamada-ui/react";
import AppBar from "@/modules/appBar";
import LoadingRecentPostsCard from "@/modules/recentPostCard/loading";
import LoadingTagListCard from "@/modules/tagListCard/loading";
import RecentPostsCard from "@/modules/recentPostCard";
import TagListCard from "@/modules/tagListCard";
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
                    <AppBar />
                    <SimpleGrid columns={4} gap="lg" w='full' paddingX={350} marginY='lg'>
                        <GridItem colSpan={{ base: 3, md: 4 }} w='full'>
                            {children}
                        </GridItem>
                        <GridItem colSpan={1} w='full' display={{ base: 'block', md: 'none' }}>
                            <VStack>
                                <AdmaxPCSideVertical />
                                <Suspense fallback={<LoadingTagListCard />}>
                                    <TagListCard />
                                </Suspense>
                                <Suspense fallback={<LoadingRecentPostsCard />}>
                                    <RecentPostsCard />
                                </Suspense>
                            </VStack>
                        </GridItem>
                    </SimpleGrid>
                </Provider>
            </body>
        </html>
    )
}