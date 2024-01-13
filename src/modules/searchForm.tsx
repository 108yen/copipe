'use client'
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import theme from '@/theme/theme';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    text: string;
}

const SearchCard = styled(Card)(() => ({
    position: "sticky",
    top: 0,
    zIndex: 100,
}));

export default function SearchForm() {
    const router = useRouter()
    const { control, handleSubmit } = useForm<Inputs>({
        defaultValues: {
            text: ''
        }
    })

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        router.push(`/search?text=${encodeURIComponent(data.text)}`)
    }

    return (
        <>
            <SearchCard
                sx={{ m: theme.spacing(2) }}
                elevation={0}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="text"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                id='text'
                                placeholder="search"
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton type='submit'>
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                size="small"
                            />
                        )}
                    />
                </form>
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