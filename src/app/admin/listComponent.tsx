'use client'
import { CopipeWithTag } from "@/models/copipeWithTag";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import EditModal from "./editModal";
import { Typography } from "@mui/material";

export default function ListComponent(props: { copipe: CopipeWithTag }) {
    const { copipe } = props;
    const [open, setOpen] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function closeModal() {
        setModalIsOpen(false)
    }

    function openModal() {
        setModalIsOpen(true)
    }

    function handleClick() {
        setOpen(!open);
    };

    return (
        <>
            <ListItem
                disablePadding
            >
                <ListItemText
                    primary={
                        <Stack direction='row'>
                            <Typography
                                variant="h6"
                                flexGrow={1}
                                onClick={() => handleClick()}
                            >
                                {`${copipe.copipe_id}. ${copipe.title}`}
                            </Typography>
                            <IconButton onClick={() => openModal()}>
                                <EditIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    }
                    secondary={
                        open
                            ? <Stack direction='column'>
                                <Stack direction='row'>
                                    {copipe.tag_bodies.map(tag => tag == null ? null : <Chip key={tag} label={tag} size="small" />)}
                                </Stack>
                                {copipe.body}
                            </Stack>
                            : null
                    }
                />
            </ListItem>
            <Divider variant="middle" component='li' />
            <EditModal open={modalIsOpen} onClose={() => closeModal()} copipe={copipe} />
        </>
    )

}