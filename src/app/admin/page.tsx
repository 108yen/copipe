import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import supabase from "@/utils/supabase";
import { CopipeWithTag } from "@/models/copipeWithTag";
import Stack from "@mui/material/Stack";
import Link from "next/link";

export default async function page() {

    const { data, error } = await supabase
        .rpc('get_random_copipe')
    const copipe: CopipeWithTag = {
        copipe_id: data[0].copipe_id,
        title: data[0].title,
        body: data[0].body,
        tags: data[0].tags
    }

    const twitterLink = `https://twitter.com/intent/tweet?url=https://www.netcopipe.com/archives/${copipe.copipe_id}&text=${copipe.body
        }`;
    
    return (
        <>
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
        </>
    )
}