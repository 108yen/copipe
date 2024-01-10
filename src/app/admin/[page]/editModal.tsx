'use client'
import { CopipeWithTag } from "@/models/copipeWithTag";
import { Tag } from "@/models/tag";
import Alert from "@mui/material/Alert";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { updateTags } from "./serverActions";

type Inputs = {
    tags: string[];
}

type SnackbarStateProps = {
    open: boolean
    severity: `success` | `info` | `warning` | `error`
    message: string
}

export default function EditModal(props: {
    open: boolean,
    onClose: () => void,
    copipe: CopipeWithTag | undefined,
    tags: Tag[]
}) {
    const { open, onClose, copipe, tags } = props;

    const { control, handleSubmit, formState, setValue, reset } = useForm<Inputs>({
        defaultValues: {
            tags: copipe?.tag_bodies
        }
    })
    const [snackbarState, setSnackbarState] = useState<SnackbarStateProps>({
        open: false,
        severity: `success`,
        message: ``
    })

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        const tagIds = data.tags.map(tag => {
            return tags.find(value=>value.body==tag)!.id
        })
        const result = await updateTags(copipe!.copipe_id, tagIds)

        if (result?.error) {
            setSnackbarState({
                open: true,
                severity: `error`,
                message: '更新失敗'
            })
        } else {
            setSnackbarState({
                open: true,
                severity: `success`,
                message: '更新完了'
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
        <Modal open={open} onClose={onClose}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                onKeyDown={e => checkKeyDown(e)}
            >
                <Stack
                    direction='column'
                    justifyContent='center'
                    p={3}
                    spacing={1}
                    borderRadius={2}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        minWidth: 400,
                        bgcolor: 'background.paper',
                    }}
                >
                    <Typography variant="h5">{copipe?.title}</Typography>
                    <Controller
                        control={control}
                        name="tags"
                        render={({ field }) => (
                            <Autocomplete
                                {...field}
                                multiple
                                fullWidth
                                filterSelectedOptions
                                size="small"
                                options={tags.map((tag) => tag.body)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        color="secondary"
                                        placeholder="タグ"
                                    />
                                )}
                                onChange={(_, value) => {
                                    setValue("tags", value);
                                }}
                            />
                        )}
                    />
                    <Divider />
                    <Typography variant="body1">{copipe?.body}</Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        disableElevation
                        disabled={formState.isSubmitting}
                        type="submit"
                    >
                        更新
                    </Button>
                </Stack>
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
        </Modal>
    )
}