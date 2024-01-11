import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

export default function SearchAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} sx={{ backgroundColor: 'primary.light' }}>
                <Toolbar>
                    <Stack
                        direction='row'
                        flexGrow={1}
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Link
                            href='/'
                            style={{
                                textDecoration: 'none',
                                overflow: 'hidden'
                            }}
                        >
                            <Typography
                                variant="h5"
                                fontWeight='bold'
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: { xs: 'block' },
                                    color: 'text.primary',
                                    textDecoration: 'none',
                                }}
                            >
                                copipe
                            </Typography>
                        </Link>
                        <Link
                            href='/about'
                            style={{
                                textDecoration: 'none',
                                overflow: 'hidden',
                            }}
                        >
                            <Typography
                                variant="caption"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: { xs: 'block' },
                                    color: 'text.disabled',
                                    textDecoration: 'none',
                                }}
                            >
                                このサイトについて
                            </Typography>
                        </Link>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Divider />
        </Box>
    );
}