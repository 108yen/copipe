import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fafafa',
            light: '#ffffff',
            dark: '#c7c7c7',
        },
        secondary: {
            main: '#ff7043',
            light: '#ffa270',
            dark: '#c63f17',
        }
    }
});

export default theme;