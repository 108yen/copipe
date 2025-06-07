"use client"

import { VStack } from "@yamada-ui/react"
import { useState } from "react"
import { CopipeWithTagPayload, TagPayload } from "@/db/query"
import { updateTags } from "@/server-actions"
import { TitleList } from "../components/data-display"
import { Pagination } from "../components/navigation"
import { EditModal } from "../components/overlay"

interface AdminPageTemplateProps {
  copipes: CopipeWithTagPayload[]
  count: number
  page: number
  tags: TagPayload[]
}

export function AdminPageTemplate({
  copipes,
  count,
  page,
  tags,
}: AdminPageTemplateProps) {
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
    <VStack>
      <TitleList copipes={copipes} openModal={openModal} />

      <EditModal
        copipe={modalProps.copipe}
        onClose={closeModal}
        open={modalProps.open}
        tags={tags}
        updateTags={updateTags}
      />

      <Pagination
        page={page}
        total={count ? Math.ceil(count / 100) : 0}
        url="/admin"
      />
    </VStack>
  )
}
