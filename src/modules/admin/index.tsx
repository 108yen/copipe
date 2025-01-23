"use client"

import { updateTags } from "@/app/admin/serverActions"
import { CopipeWithTagPayload, TagPayload } from "@/db/query"
import { useState } from "react"

import EditModal from "./editModal"
import TitleList from "./titleList"

export default function AdminPageTemplate(props: {
  copipes: CopipeWithTagPayload[]
  tags: TagPayload[]
}) {
  const { copipes, tags } = props

  const [modalProps, setModalProps] = useState<{
    copipe: CopipeWithTagPayload | undefined
    open: boolean
  }>({
    copipe: undefined,
    open: false,
  })

  function closeModal() {
    setModalProps({ ...modalProps, open: false })
  }

  function openModal(copipe: CopipeWithTagPayload) {
    setModalProps({
      copipe: copipe,
      open: true,
    })
  }

  return (
    <>
      <TitleList copipes={copipes} openModal={openModal} />
      <EditModal
        copipe={modalProps.copipe}
        onClose={closeModal}
        open={modalProps.open}
        tags={tags}
        updateTags={updateTags}
      />
    </>
  )
}
