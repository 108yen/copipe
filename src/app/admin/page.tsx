import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import supabase from "@/utils/supabase";
import { CopipeWithTag } from "@/models/copipeWithTag";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import CopipeCard from "@/modules/copipeCard";

export const revalidate = 0

export default async function page() {

    const { data, error } = await supabase
        .rpc('get_random_copipe')
    const copipe: CopipeWithTag = {
        copipe_id: data[0].copipe_id,
        title: data[0].title,
        body: data[0].body,
        tags: data[0].tags
    }
    const url = `https://www.netcopipe.com/archives/${copipe.copipe_id}`
    const text = encodeURIComponent(reductionText(copipe.body, url))

    const twitterLink = `https://twitter.com/intent/tweet?url=${url}&text=${text
        }`;

    function reductionText(text: string, url: string) {
        let reductionCount = 0
        while (!checkTweetLength(`${text.slice(0, text.length - reductionCount)}...${url}`)) {
            reductionCount++
        }
        return `${text.slice(0, text.length - reductionCount)}...`
    }

    function countCharacters(text: string): { fullWidth: number; halfWidth: number } {
        let fullWidth = 0;
        let halfWidth = 0;
        for (const char of text) {
            // 全角文字かどうかを判定
            if (char.match(/[^\x01-\x7E\xA1-\xDF]/)) {
                fullWidth += 2;
            } else {
                halfWidth += 1;
            }
        }

        return { fullWidth, halfWidth };
    }

    function checkTweetLength(text: string): boolean {
        const { fullWidth, halfWidth } = countCharacters(text);
        const totalCharacters = fullWidth + halfWidth;
        return fullWidth <= 140 && totalCharacters <= 280
    }

    return (
        <CopipeCard>
            <Stack direction='row' spacing={2}>
                <Link href='/admin/1'>
                    <Typography
                        variant="body2"
                    >
                        コピペリスト
                    </Typography>
                </Link>
                <Typography
                    variant="body2"
                    component="a"
                    display="flex"
                    alignItems="center"
                    color="text.primary"
                    sx={{ textDecorationLine: "none" }}
                    href={twitterLink}
                    target="_blank"
                >
                    <TwitterIcon fontSize="small" />
                    ランダムツイート
                </Typography>
            </Stack>
        </CopipeCard>
    )
}