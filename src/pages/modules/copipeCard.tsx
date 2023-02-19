import theme from "@/theme";
import { Box, Button, Card, CardContent, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { Copipe, postAllCopipeAtom } from "../Atoms";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import supabase from "@/utils/supabase";

const CopipeCard = (copipeList:Array<Copipe>) => {
    // const [post] = useAtom(postAllCopipeAtom);

    return (
        <Card
            sx={{ m: theme.spacing(2) }}
        >
            <CardContent>
                {copipeList.map((e) => CopipeItemWidget(e))}
            </CardContent>
        </Card>
    );
}

const handleClickCopy = async (copyText: string, id: number) => {
    await global.navigator.clipboard.writeText(copyText);

    const { data, error } = await supabase
        .from('copy_history')
        .insert([
            { copipe_id: id },
        ])
}

const CopipeItemWidget = (copipeItem: Copipe) => {
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
                    aria-label="copy"
                    size="small"
                    onClick={() => handleClickCopy(copipeItem.body, copipeItem.id)}
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
                {copipeItem.body}
            </Typography>
        </Box>
    );
}

export default CopipeCard;