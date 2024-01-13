import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Skeleton } from "@mui/material";


export function CopipeCardItemSkelton() {
    return (
        <Box
            sx={{
                margin: { xs: 1, sm: 2 },
                paddingY: 1,
            }}
        >
            <Stack
                direction='row'
                justifyContent="space-between"
            >
                <Typography
                    variant="h5"
                    noWrap
                    color='text.primary'
                    sx={{
                        flexGrow: 1,
                        display: 'block',
                    }}
                >
                    <Skeleton width={500} />
                </Typography>
                <IconButton
                    color="secondary"
                    aria-label="copy"
                    size="small"
                >
                    <ContentCopyIcon fontSize="inherit" />
                </IconButton>
            </Stack>
            <Skeleton height={20} width={100} />
            <Divider />
            <Skeleton height={200} />
        </Box>
    );
}