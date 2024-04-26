"use client"

import { useState } from "react"
import TitleList from "./titleList"
import EditModal from "./editModal"
import { CopipeWithTagPayload, TagPayload } from "@/db/query"
import { updateTags } from "@/app/admin/serverActions"

export default function AdminPageTemplate(props: {
  copipes: CopipeWithTagPayload[]
  tags: TagPayload[]
}) {
  const { copipes, tags } = props

  const [modalProps, setModalProps] = useState<{
    open: boolean
    copipe: CopipeWithTagPayload | undefined
  }>({
    open: false,
    copipe: undefined,
  })

  function closeModal() {
    setModalProps({ ...modalProps, open: false })
  }

  function openModal(copipe: CopipeWithTagPayload) {
    setModalProps({
      open: true,
      copipe: copipe,
    })
  }

  return (
    <>
      <TitleList copipes={copipes} openModal={openModal} />
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
