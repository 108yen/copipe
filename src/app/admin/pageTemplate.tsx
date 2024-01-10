'use client'

import { CopipeWithTag } from "@/models/copipeWithTag"
import List from "@mui/material/List"
import ListComponent from "./listComponent";
import { Tag } from "@/models/tag";
import { useState } from "react";
import EditModal from "./editModal";

export default function PageTemplate(props: {
    copipes: CopipeWithTag[],
    tags: Tag[]
}) {
    const { copipes, tags } = props;

    const [modalProps, setModalProps] = useState<{
        open: boolean, copipe: CopipeWithTag | undefined
    }>({
        open: false, copipe: undefined
    })

    function closeModal() {
        setModalProps({ ...modalProps, open: false })
    }

    function openModal(copipe: CopipeWithTag) {
        setModalProps({
            open: true,
            copipe: copipe
        })
    }
    
    return (
        <>
            <List>
                {copipes.map(copipe =>
                    <ListComponent
                        key={copipe.copipe_id}
                        copipe={copipe}
                        openModal={openModal} />
                )}
            </List>
            <EditModal
                open={modalProps.open}
                onClose={() => closeModal()}
                copipe={modalProps.copipe}
                tags={tags}
            />
        </>
    )
}