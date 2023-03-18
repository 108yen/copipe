import theme from "@/theme";
import { Box, Card, CardContent, CircularProgress, Divider, IconButton, Stack, Typography } from "@mui/material";
import { Copipe, copipeListAtom } from "../components/Atoms";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import supabase from "@/utils/supabase";
import Link from "next/link";
import { useAtom } from "jotai";
import { loadable } from "jotai/utils"

const CopipeCard: React.FC = () => {
    const loadableAtom = loadable(copipeListAtom);
    const [value] = useAtom(loadableAtom);

    if (value.state === 'hasError') {
        return <Box
            key={0}
            sx={{
                m: 3,
                display: "flex",
                justifyContent: "center"
            }}>
            <Typography>error</Typography>
        </Box>;
    }
    if (value.state === 'loading') {
        return <Box
            key={0}
            sx={{
                m: 3,
                display: "flex",
                justifyContent: "center"
            }}>
            <CircularProgress color="secondary" />
        </Box>;
    }
    return (
        <Card
            sx={{
                m: { xs: theme.spacing(1), sm: theme.spacing(2) }
            }}
        >
            <CardContent>
                {value.data.map((e) => CopipeItemWidget(e))}
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

export const CopipeItemWidget = (copipeItem: Copipe) => {
    return (
        <Box key={copipeItem.id}
            sx={{
                margin: { xs: theme.spacing(1), sm: theme.spacing(2) },
                paddingY: theme.spacing(1),
            }}
        >
            <Stack
                direction='row'
                justifyContent="space-between"
            >
                <Link
                    href={'/archives/' + copipeItem.id}
                    style={{
                        textDecoration: 'none',
                        color: theme.palette.text.primary,
                        overflow: 'hidden'
                    }}
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
                </Link>
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
                    whiteSpace: 'pre-line',
                }}
                gutterBottom
            >
                {copipeItem.body}
            </Typography>
        </Box>
    );
}

export default CopipeCard;