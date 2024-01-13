'use client'

import { CopipeWithTag } from "@/models/copipeWithTag";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

async function handleClickCopy (copyText: string, id: number) {
    await global.navigator.clipboard.writeText(copyText);
}

export function CopipeCardItem(props:{copipeItem: CopipeWithTag}) {
    const { copipeItem } = props;

    return (
        <Box key={copipeItem.copipe_id}
            sx={{
                margin: { xs: 1, sm: 2 },
                paddingY: 1,
            }}
        >
            <Stack
                direction='row'
                justifyContent="space-between"
            >
                <Link
                    href={'/archives/' + copipeItem.copipe_id}
                    style={{
                        textDecoration: 'none',
                        overflow: 'hidden'
                    }}
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
                        {copipeItem.title}
                    </Typography>
                </Link>
                <IconButton
                    color="secondary"
                    aria-label="copy"
                    size="small"
                    onClick={() => handleClickCopy(copipeItem.body, copipeItem.copipe_id)}
                >
                    <ContentCopyIcon fontSize="inherit" />
                </IconButton>
            </Stack>
            <Stack direction='row'>
                {copipeItem.tags.map(tag =>
                    tag.tag_body == null
                        ? null
                        : <Link key={tag.tag_id} href={`/tag/${tag.tag_id}/1`}>
                            <Chip
                                key={tag.tag_id}
                                label={tag.tag_body}
                                variant="outlined"
                                color="secondary"
                                size="small"
                            />
                        </Link>
                )}
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