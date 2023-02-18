import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import Card from '@mui/material/Card/Card';
import theme from '@/theme';

export default function SearchForm() {
    return (
        <Card
            sx={{ m: theme.spacing(2) }}
        >
            <FormControl fullWidth>
                <TextField
                    placeholder="search"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    size="small"
                >
                </TextField>
            </FormControl>
        </Card>
    );
}