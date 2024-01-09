'use client'
import { CopipeWithTag } from "@/models/copipeWithTag";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";

export default function ListComponent(props: { copipe: CopipeWithTag }) {
    const { copipe } = props;
    const [open, setOpen] = useState(false)

    function handleClick() {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton alignItems="flex-start" onClick={() => handleClick()}>
                <ListItemText
                    primary={`${copipe.copipe_id}. ${copipe.title}`}
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
            </ListItemButton>
            <Divider variant="middle" />
        </>
    )

}