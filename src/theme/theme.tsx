'use client'
import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles';

//https://zenoo.github.io/mui-theme-creator/
export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#fafafa',
            dark: '#c7c7c7',
            light: '#ffffff',
        },
        secondary: {
            main: '#607d8b',
        },
        background: {
            default: "#DAE0E6",
        },
    },
};

const theme = createTheme(themeOptions);

export default theme;