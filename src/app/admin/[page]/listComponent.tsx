'use client'
import { CopipeWithTag } from "@/models/copipeWithTag";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function ListComponent(props: {
    copipe: CopipeWithTag,
    openModal: (copipe: CopipeWithTag) => void
}) {
    const { copipe, openModal } = props;
    const [open, setOpen] = useState(false)

    function handleClick() {
        setOpen(!open);
    };

    const notSetTag = copipe.tags.length == 1 && copipe.tags[0].tag_body == null;

    return (
        <>
            <ListItem
                disablePadding
            >
                <ListItemText
                    primary={
                        <Stack direction='row' justifyContent='center'>
                            <Typography
                                variant="h6"
                                flexGrow={1}
                                onClick={() => handleClick()}
                            >
                                {`${copipe.copipe_id}. ${copipe.title}`}
                            </Typography>
                            {notSetTag ? <ErrorOutlineIcon display='flex' color="warning" /> : null}
                            <IconButton onClick={() => openModal(copipe)}>
                                <EditIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    }
                    secondary={
                        open
                            ? <Stack direction='column'>
                                <Stack direction='row'>
                                    {copipe.tags.map(tag => tag.tag_body == null ? null : <Chip key={tag.tag_id} label={tag.tag_body} size="small" />)}
                                </Stack>
                                {copipe.body}
                            </Stack>
                            : null
                    }
                />
            </ListItem>
            <Divider variant="middle" component='li' />
        </>
    )

}