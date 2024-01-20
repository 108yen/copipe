import CopipeCard from "@/modules/mui/copipeCard";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function TagListCardLoading() {
    return (
        <CopipeCard>
            <Stack direction='column'>
                <Typography variant="h5">
                    タグ一覧
                </Typography>
                <Divider />
                <Box>
                    {[...Array(3)].map(value => <Skeleton key={value} variant="rectangular" height={12} sx={{ marginTop: 1 }} />)}
                </Box>
            </Stack>
        </CopipeCard>
    )
}