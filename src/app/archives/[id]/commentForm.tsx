'use client'

import { ExpandableTextField } from "@/components/expandableTextField";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { postComment } from "./serverActions";
import { useState } from "react";
import { Snackbar, Alert, Box, Button } from "@mui/material";
import { CopipeComment } from "@/models/comment";

type Inputs = {
    body: string;
}

type SnackbarStateProps = {
    open: boolean
    severity: `success` | `info` | `warning` | `error`
    message: string
}

export default function CommentForm(props: { copipe_id: number, addOptimisticComment: (action: CopipeComment) => void }) {
    const { copipe_id, addOptimisticComment } = props;

    const { control, handleSubmit, reset } = useForm<Inputs>({
        defaultValues: {
            body: ''
        }
    })

    const [snackbarState, setSnackbarState] = useState<SnackbarStateProps>({
        open: false,
        severity: `success`,
        message: ``
    })

    const validationRules = {
        body: {
            required: 'コメントを入力して下さい',
            minLength: { value: 1, message: 'コメントを入力して下さい' }
        }
    }

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        addOptimisticComment({
            id: Math.random(),
            body: data.body
        })
        
        const result = await postComment(copipe_id, data.body)

        if (result?.error) {
            setSnackbarState({
                open: true,
                severity: `error`,
                message: '投稿失敗'
            })
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
            onKeyDown={e => checkKeyDown(e)}
        >
            <Controller
                name="body"
                control={control}
                rules={validationRules.body}
                render={({ field, fieldState }) => (
                    <ExpandableTextField
                        {...field}
                        id="body"
                        label="コメント"
                        fullWidth
                        multiline
                        minRows={1}
                        maxRows={30}
                        margin="normal"
                        color='secondary'
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message ?? "改行: shift + enter"}
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
                >
                    コメント
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