'use client'

import { Alert, Box, Button, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {postNewCopipe} from "./serverActions";
import { ExpandableTextField } from "@/components/expandableTextField";

type Inputs = {
    title: string;
    body: string;
}

type SnackbarStateProps = {
    open: boolean
    severity: `success` | `info` | `warning` | `error`
    message: string
}

export default function CopipeSubmitForm() {
    const { control, handleSubmit, reset, formState } = useForm<Inputs>({
        defaultValues: {
            title: '',
            body:''
        }
    })
    const [snackbarState, setSnackbarState] = useState<SnackbarStateProps>({
        open: false,
        severity: `success`,
        message: ``
    })

    const validationRules = {
        title: {
            required: 'タイトルを入力して下さい',
            minLength:{value:1,message:'タイトルを入力して下さい'}
        },
        body: {
            required: '本文を入力して下さい',
            minLength:{value:1,message:'本文を入力して下さい'}
        }
    }

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        const result = await postNewCopipe(data)

        if (result?.error) {
            setSnackbarState({
                open: true,
                severity: `error`,
                message: '投稿失敗'
            })
        } else if (result?.message) {
            setSnackbarState({
                open: true,
                severity: `warning`,
                message: result.message
            })
            reset()
        } else {
            setSnackbarState({
                open: true,
                severity: `success`,
                message: '投稿完了'
            })
            reset()
        }
    }

    //prevent submit by enter key down
    const checkKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === `Enter` && !e.shiftKey) {
            e.preventDefault()
        }
    }

    function handleSnackbarClose() {
        setSnackbarState((prev) => {
            return { ...prev, open: false }
        })
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={e=>checkKeyDown(e)}
        >
            <Controller
                name="title"
                control={control}
                rules={validationRules.title}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        id='title'
                        label="タイトル"
                        fullWidth
                        margin="normal"
                        color='secondary'
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                    />
                )}
            />
            <Controller
                name="body"
                control={control}
                rules={validationRules.body}
                render={({ field, fieldState }) => (
                    <ExpandableTextField
                        {...field}
                        id="body"
                        label="本文"
                        fullWidth
                        multiline
                        minRows={4}
                        maxRows={30}
                        margin="normal"
                        color='secondary'
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                    />
                )}
            />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    disabled={formState.isSubmitting}
                >
                    投稿
                </Button>
            </Box>
            <Snackbar
                open={snackbarState.open}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={snackbarState.severity}
                >
                    {snackbarState.message}
                </Alert>
            </Snackbar>
        </form>
    )
}