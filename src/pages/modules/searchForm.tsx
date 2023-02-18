import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import { Card } from '@mui/material';
import theme from '@/theme';
import { useAtom } from 'jotai';
import { searchTextAtom } from '../Atoms';

export default function SearchForm() {
    const [searchText, setSearchText] = useAtom(searchTextAtom);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key=='Enter') {
            handleSubmit();
        }
    }
    const handleSubmit = () => {
        if (searchText != '') {
            //todo:検索処理
            console.log(searchText);
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setSearchText(value);
    }

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
                                <IconButton
                                onClick={handleSubmit}
                                >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    size="small"
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                >
                </TextField>
            </FormControl>
        </Card>
    );
}