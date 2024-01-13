import { Tag } from "@/models/tag";
import CopipeCard from "@/modules/copipeCard";
import supabase from "@/utils/supabase";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default async function page() {
    const { data, error } = await supabase
        .from('tag')
        .select()
    const tags: Tag[] | undefined = data?.map(
        tag => {
            return {
                id: tag.id,
                created_at: new Date(tag.created_at),
                body: tag.body
            }
        }
    )

    return (
        <CopipeCard>
            <Stack direction='column'>
                <Typography variant="h5">
                    タグ一覧
                </Typography>
                <Box>
                    {tags?.map(tag => (
                        <Link key={tag.id} href={`/tag/${tag.id}/1`}>
                            <Chip key={tag.id} label={tag.body} color="secondary" size="small" variant="outlined" />
                        </Link>
                    ))}
                </Box>
            </Stack>
        </CopipeCard>
    )
}