import CopipeCard from "@/modules/copipeCard";
import supabase from "@/utils/supabase";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { cache } from "react";

const fetchRecentCopipes = cache(async () => {
    console.log('get recent copipes')
    return await supabase
        .from('copipe_with_tag')
        .select('copipe_id, title')
        .order('copipe_id', { ascending: false })
        .range(0, 99);
})

export const revalidate = 86400

export default async function page() {
    const { data, error } = await fetchRecentCopipes()
    const copipes: { copipe_id: number, title: string }[] | undefined = data?.map(value => {
        return {
            copipe_id: value.copipe_id,
            title: value.title
        }
    })

    return (
        <CopipeCard>
            <Stack direction='column'>
                <Typography variant="h5">
                    最近の投稿
                </Typography>
                <Divider />
                {copipes?.map(copipe => (
                    <Link
                        key={`recent-copipe-${copipe.copipe_id}`}
                        href={`/archives/${copipe.copipe_id}`}
                        style={{
                            textDecoration: 'none',
                            overflow: 'hidden'
                        }}
                    >
                        <Typography
                            variant="body2"
                            color='text.primary'
                            noWrap
                            sx={{
                                '&:hover': {
                                    textDecorationLine: `underline`
                                }
                            }}
                        >
                            {copipe.title}
                        </Typography>
                    </Link>
                ))}
            </Stack>
        </CopipeCard >
    )
}