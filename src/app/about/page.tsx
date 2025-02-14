import {
  Container,
  DiscList,
  Heading,
  ListItem,
  Separator,
  Text,
} from "@yamada-ui/react"
import Link from "next/link"

export default function page() {
  return (
    <Container>
      <Heading textAlign="center" textStyle="aboutPageHeading" variant="h3">
        本サイトについて
      </Heading>
      <Heading textStyle="aboutPageHeading" variant="h4">
        1. はじめに
      </Heading>
      <Separator />
      <Text>
        当サイトでは2ch/5chやまとめサイトなどで話題になった有名なコピペや、笑えるコピペを収集しています。コピペの検索、投稿、コメントが可能です。
      </Text>

      <Heading textStyle="aboutPageHeading" variant="h4">
        2. 禁止事項
      </Heading>
      <Separator />
      <DiscList>
        <ListItem>当サイトの利用に際して、以下の行為は禁止とします。</ListItem>
        <ListItem>違法行為、またはそのおそれのある行為</ListItem>
        <ListItem>公序良俗に反する行為、またはそのおそれのある行為</ListItem>
        <ListItem>
          当サイトの運営を妨げる行為、またはそのおそれのある行為
        </ListItem>
        <ListItem>当サイトに対する攻撃、またはそのおそれのある行為</ListItem>
        <ListItem>
          当サイトのコンテンツをプログラム等を用いて機械的に取得する行為
          (Webスクレイピング行為等)
        </ListItem>
      </DiscList>
      <Heading textStyle="aboutPageHeading" variant="h4">
        3. Google Analytics
      </Heading>
      <Separator sx={{ marginY: 1 }} />
      <Text>
        サイトの利用状況を把握するために、Google
        Analyticsを使用しています。GoogleによるCookieの利用方法やオプトアウトの方法は、下記のリンクから確認できます。
      </Text>
      <DiscList>
        <ListItem>
          <Link
            aria-label="google link"
            href="https://policies.google.com/technologies/cookies?hl=ja"
            style={{
              textDecoration: `none`,
            }}
            target="_blank"
          >
            <Text
              sx={{
                "&:hover": {
                  textDecorationLine: `underline`,
                },
              }}
            >
              GoogleによるCookieの利用方法
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            aria-label="google opt out link"
            href="https://support.google.com/analytics/answer/181881?hl=ja"
            style={{
              textDecoration: `none`,
            }}
            target="_blank"
          >
            <Text
              sx={{
                "&:hover": {
                  textDecorationLine: `underline`,
                },
              }}
            >
              Google Analyticsのオプトアウト
            </Text>
          </Link>
        </ListItem>
      </DiscList>
    </Container>
  )
}
