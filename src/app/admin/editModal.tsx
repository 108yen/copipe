'use client'
import { CopipeWithTag } from "@/models/copipeWithTag";
import { Tag } from "@/models/tag";
import Autocomplete from "@mui/material/Autocomplete";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";

type Inputs = {
    tags: string[];
}

export default function EditModal(props: {
    open: boolean,
    onClose: () => void,
    copipe: CopipeWithTag | undefined,
    tags: Tag[]
}) {
    const { open, onClose, copipe, tags } = props;

    const { control, handleSubmit, formState, setValue } = useForm<Inputs>({
        defaultValues: {
            tags: copipe?.tag_bodies
        }
    })

    //todo: form
    return (
        <Modal open={open} onClose={onClose}>
            <Stack
                direction='column'
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
            </Stack>
        </Modal>
    )
}