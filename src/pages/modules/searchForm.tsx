import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Button, FormControl, InputAdornment, TextField } from '@mui/material';
import { Card } from '@mui/material';
import theme from '@/theme';
import { SetStateAction, useAtom } from 'jotai';
import { Copipe, copipeListAtom, searchTextAtom } from './Atoms';
import styled from '@emotion/styled';
import supabase from '@/utils/supabase';
import { Box } from '@mui/system';
import router from 'next/router';

const SearchCard = styled(Card)(() => ({
    position: "sticky",
    top: 0,
    zIndex: 100,
}));

const SearchForm = (setCopipeList: any) => {
    const [searchText, setSearchText] = useAtom(searchTextAtom);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key == 'Enter') {
            handleSubmit();
        }
    }
    const handleSubmit = async () => {
        if (searchText != '') {
            //todo:検索処理
            await setCopipeList(await searchCopipe(searchText));
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setSearchText(value);
    }
    const searchCopipe = async (word: string) => {
        const { data, error } = await supabase
            .from('copipe')
            .select('*')
            .like('body', '%' + word + '%');
        const copipes: Array<Copipe> = data != null ? data.map(e => {
            const copipeItem: Copipe = {
                id: e.id,
                inserted_at: e.inserted_at,
                updated_at: e.updated_at,
                body: e.body,
                title: e.title,
            };
            return copipeItem;
        }) : [];

        return copipes;
    }

    return (
        <>
            <SearchCard
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
            </SearchCard>
            <Box sx={{
                display: 'flex',
                justifyContent: "flex-end",
                m: theme.spacing(2),
                marginTop: -2.4,
            }}>
                <Button
                    key={'postform'}
                    onClick={() => { router.push("/postForm") }}
                    color='secondary'
                    size='small'
                    style={{ color: 'gray' }}
                >
                    追加はこちらから
                </Button>
            </Box>
        </>
    );
}

export default SearchForm;