'use client'

import { CopipeWithTag } from "@/models/copipeWithTag"
import { Tag } from "@/models/tag";
import { useState } from "react";
import TitleList from "./titleList";
import EditModal from "./editModal";
import { updateTags } from "@/app/admin/[page]/serverActions";

export default function AdminPageTemplate(props: {
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
            <TitleList copipes={copipes} openModal={openModal}/>
            <EditModal
                open={modalProps.open}
                onClose={closeModal}
                copipe={modalProps.copipe}
                tags={tags}
                updateTags={updateTags}
            />
        </>
    )
    
}