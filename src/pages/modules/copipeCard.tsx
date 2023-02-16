import theme from "@/theme";
import { Box, Button, Card, CardContent, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { Copipe, postAllCopipeAtom } from "../Atoms";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function CopipeCard() {
    const [post] = useAtom(postAllCopipeAtom);

    return (
        <Card>
            <CardContent>
                {post.map((e) => CopipeItemWidget(e))}
            </CardContent>
        </Card>
    );
}

const CopipeItemWidget=(copipeItem: Copipe)=> {
    return (
        <Box key={copipeItem.id}
        sx={{
            margin: theme.spacing(2),
        }}
    >
        <Stack
            direction='row'
            justifyContent="space-between"
        >
            <Typography
                variant="h5"
                noWrap
                sx={{
                    flexGrow: 1,
                    display: 'block',
                }}
            >
                {copipeItem.title}
            </Typography>
            <IconButton
                color="secondary"
                aria-labe="copy"
                size="small"
                onClick={async () => { await global.navigator.clipboard.writeText(copipeItem.data); }}
            >
                <ContentCopyIcon fontSize="inherit" />
            </IconButton>
        </Stack>
        <Divider />
        <Typography
            variant="body1"
            sx={{
                flexGrow: 1,
                display: 'block',
            }}
            gutterBottom
        >
            {copipeItem.data}
        </Typography>
    </Box>
    );
}