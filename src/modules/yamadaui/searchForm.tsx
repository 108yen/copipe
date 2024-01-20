'use client'
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button, Card, IconButton, Input, InputGroup, InputLeftElement, VStack } from '@yamada-ui/react';

type Inputs = {
    text: string;
}

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
        <VStack alignItems='flex-end' gap={0}>
            <Card
                position='sticky'
                top={0}
                zIndex={100}
                variant='subtle'
                bg='Background'
                w='full'
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="text"
                        control={control}
                        render={({ field, fieldState }) => (
                            <InputGroup>
                                <Input
                                    {...field}
                                    focusBorderColor='secondary'
                                    id='text'
                                    placeholder="search"
                                />
                                <InputLeftElement isClick>
                                    <IconButton
                                        type='submit'
                                        variant='link'
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputLeftElement>
                            </InputGroup>
                        )}
                    />
                </form>
            </Card>
            <Button
                onClick={() => { router.push("/postForm") }}
                fontWeight='normal'
                color='gray'
                variant='link'
                size='xs'
                w='fit-content'
            >
                追加はこちらから
            </Button>
        </VStack>
    );
}