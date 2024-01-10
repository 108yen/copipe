import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Divider from '@mui/material/Divider';

export default function SearchAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} sx={{ backgroundColor: 'primary.light' }}>
                <Toolbar>
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
                </Toolbar>
            </AppBar>
            <Divider />
        </Box>
    );
}