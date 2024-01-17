import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import CopipeCard from "@/modules/copipeCard";
import getTweet from "@/utils/tweet";

export const revalidate = 0

export default async function page() {

    const { text, url } = await getTweet()
    const twitterLink = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(text)
        }`;

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