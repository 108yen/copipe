import theme from "@/theme";
import supabase from "@/utils/supabase";
import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { atom, useAtom } from "jotai";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

type Copipe = {
    id: number;
    inserted_at: Date;
    updated_at: Date;
    data: String;
    title: String;
}

export const postAllCopipeAtom = atom(async (get) => {
    const response = await supabase.from('copipe').select('*');
    const copipes: Array<Copipe> = response.data != null ? response.data.map(e => {
        const copipe: Copipe = {
            id: e.id,
            inserted_at: e.inserted_at,
            updated_at: e.updated_at,
            data: e.data,
            title: e.title,
        };
        return copipe;
    }) : [];

    return copipes.map((e) =>
        <Box
            sx={{
                // margin: theme.spacing(2),
                margin: 2,
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
                    {e.title}
                </Typography>
                <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    startIcon={<ContentCopyIcon />}
                >
                    copy
                </Button>
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
                {e.data}
            </Typography>
        </Box>
    );
})