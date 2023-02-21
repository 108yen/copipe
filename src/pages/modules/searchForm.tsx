import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, InputAdornment, TextField, Card, Box, IconButton } from '@mui/material';
import theme from '@/theme';
import { useAtom } from 'jotai';
import { Copipe, searchTextAtom, textFormAtom } from '../../components/Atoms';
import styled from '@emotion/styled';
import supabase from '@/utils/supabase';
import router from 'next/router';

const SearchCard = styled(Card)(() => ({
    position: "sticky",
    top: 0,
    zIndex: 100,
}));

type Props = {
    setSearchText: (text: string) => void;
}

const SearchForm: React.FC<Props> = ({
    setSearchText,
}) => {
    const [text, setText] = useAtom(textFormAtom);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key == 'Enter') {
            handleSubmit();
        }
    }
    const handleSubmit = async () => {
        //todo:検索処理
        setSearchText(text);
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setText(value);
    }
    const searchCopipe = async (word: string) => {
        const { data, error, count } = await supabase
            .from('copipe')
            .select('*', { count: 'exact' })
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