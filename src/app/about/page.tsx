import CopipeCard from "@/modules/mui/copipeCard";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export const metadata = {
    title: 'このサイトについて'
}

export default function page() {
    return (
        <CopipeCard>
            <Typography variant='h3' pt={10} textAlign='center'>
                本サイトについて
            </Typography>
            <Typography variant='h4' pt={10}>
                1. はじめに
            </Typography>
            <Divider sx={{ marginY: 1 }} />
            <Typography variant="body1">
                当サイトでは2ch/5chやまとめサイトなどで話題になった有名なコピペや、笑えるコピペを収集しています。コピペの検索、投稿、コメントが可能です。
            </Typography>

            <Typography variant='h4' pt={10}>
                2. 禁止事項
            </Typography>
            <Divider sx={{ marginY: 1 }} />
            <List>
                <ListItem sx={{ paddingX: 0 }}>
                    <Typography variant="body1">
                        当サイトの利用に際して、以下の行為は禁止とします。
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        違法行為、またはそのおそれのある行為
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        公序良俗に反する行為、またはそのおそれのある行為
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        当サイトの運営を妨げる行為、またはそのおそれのある行為
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        当サイトに対する攻撃、またはそのおそれのある行為
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        当サイトのコンテンツをプログラム等を用いて機械的に取得する行為
                        (Webスクレイピング行為等)
                    </Typography>
                </ListItem>
            </List>

            <Typography variant='h4' pt={10}>
                3. Google Analytics
            </Typography>
            <Divider sx={{ marginY: 1 }} />
            <Typography variant="body1">
                サイトの利用状況を把握するために、Google
                Analyticsを使用しています。GoogleによるCookieの利用方法やオプトアウトの方法は、下記のリンクから確認できます。
            </Typography>
            <List>
                <ListItem>
                    <Link
                        href='https://policies.google.com/technologies/cookies?hl=ja'
                        aria-label='google link'
                        target='_blank'
                        style={{
                            textDecoration: `none`
                        }}
                    >
                        <Typography
                            variant="body1"
                            color='text.primary'
                            sx={{
                                '&:hover': {
                                    textDecorationLine: `underline`
                                }
                            }}
                        >
                            GoogleによるCookieの利用方法
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        href='https://support.google.com/analytics/answer/181881?hl=ja'
                        aria-label='google optout link'
                        target='_blank'
                        style={{
                            textDecoration: `none`
                        }}
                    >
                        <Typography
                            variant="body1"
                            color='text.primary'
                            sx={{
                                '&:hover': {
                                    textDecorationLine: `underline`
                                }
                            }}
                        >
                            Google Analyticsのオプトアウト
                        </Typography>
                    </Link>
                </ListItem>
            </List>
        </CopipeCard>
    )
}