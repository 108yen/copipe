import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, InputAdornment, TextField, Card, Box, IconButton } from '@mui/material';
import theme from '@/theme/theme';
import { useAtom } from 'jotai';
import { textFormAtom, writeSearchTextAtom } from '../components/Atoms';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
import { sendGAEvent } from '@next/third-parties/google';

const SearchCard = styled(Card)(() => ({
    position: "sticky",
    top: 0,
    zIndex: 100,
}));

const SearchForm: React.FC = () => {
    const router = useRouter()

    const [text, setText] = useAtom(textFormAtom);
    const [, setSearchText] = useAtom(writeSearchTextAtom);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key == 'Enter') {
            handleSubmit();
        }
    }
    const handleSubmit = () => {
        sendGAEvent({
            event: 'form_start',
            value: 'search_form'
        })
        setSearchText(text);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setText(value);
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