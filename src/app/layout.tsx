import { ReactNode } from "react";
import { Metadata } from 'next'
import ThemeRegistry from "@/theme/themeRegistry";
import SearchAppBar from "@/modules/searchAppBar";
import Grid from "@mui/material/Grid";

export const metadata: Metadata = {
    title: {
        default: 'copipe | コピペのアーカイブ',
        template: '%s | copipe'
    },
    description: "2ch/5chやまとめサイトなどで話題になった有名なコピペや、笑えるコピペを収集しています。",
    openGraph: {
        url: "https://www.netcopipe.com/",
        title: "copipe | 2chコピペネタ帳",
        description: "コピペが検索できるサイト。",
        images: [
            {
                url: "https://www.netcopipe.com/android-chrome-512x512.png",
            },
        ],
    },
    twitter: {
        site: '@site',
        images: [
            {
                url: "https://www.netcopipe.com/android-chrome-512x512.png",
            },
        ],
    }
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return <html lang="ja">
        <body>
            <ThemeRegistry options={{ key: `css`, prepend: true }}>
                <SearchAppBar />
                <Grid container justifyContent="center" spacing={2} marginY={1}>
                    <Grid item xs={12} md={10} lg={8} xl={6}>
                        {children}
                    </Grid>
                </Grid>
            </ThemeRegistry>
        </body>
    </html>
}