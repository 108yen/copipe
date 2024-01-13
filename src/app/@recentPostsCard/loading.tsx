import CopipeCard from "@/modules/copipeCard";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function loading() {
    return (
        <CopipeCard>
            <Stack direction='column'>
                <Typography variant="h5">
                    最近の投稿
                </Typography>
                <Divider />
                {[...Array(50)].map(value => (
                    <Typography
                        key={value}
                        variant="body2"
                        marginTop={1}
                    >
                        <Skeleton key={value} variant="rectangular" />
                    </Typography>
                ))}
            </Stack>
        </CopipeCard>
    )
}