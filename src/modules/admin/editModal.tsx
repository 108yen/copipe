"use client"

import { CopipeWithTagPayload, TagPayload } from "@/db/query"
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  MultiAutocomplete,
  Text,
  useNotice,
} from "@yamada-ui/react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  tags: string[]
}

export default function EditModal(props: {
  copipe: CopipeWithTagPayload | undefined
  onClose: () => void
  open: boolean
  tags: TagPayload[]
  updateTags: (
    copipe_id: number,
    tag_ids: number[],
  ) => Promise<
    | undefined
    | {
        error: string
      }
  >
}) {
  const { copipe, onClose, open, tags, updateTags } = props

  const { control, formState, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: {
      tags: [],
    },
  })

  const notice = useNotice({ placement: "bottom-left", variant: "solid" })

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const tagIds = data.tags.map((tag) => {
      return tags.find((value) => value.body == tag)!.id
    })
    const result = await updateTags(copipe!.id, tagIds)

    if (result?.error) {
      notice({
        status: "error",
        title: "更新失敗",
      })
    } else {
      notice({
        status: "success",
        title: "更新完了",
      })
      reset()
    }
  }

  const modalProps: any = {
    gap: 2,
    isOpen: open,
    onClose,
    p: 4,
    size: "5xl",
  }

  return (
    <Modal {...modalProps}>
      <ModalHeader>{copipe?.title}</ModalHeader>
      <Controller
        control={control}
        name="tags"
        render={({ field }) => (
          <MultiAutocomplete
            {...field}
            items={tags.map((tag) => ({ label: tag.body, value: tag.body }))}
            omitSelectedValues
          />
        )}
      />
      <Divider />
      <ModalBody>
        <Text>{copipe?.body}</Text>
      </ModalBody>
      <ModalFooter>
        <Button
          borderColor="secondary"
          color="secondary"
          isLoading={formState.isSubmitting}
          onClick={handleSubmit(onSubmit)}
          variant="outline"
          w="fit-content"
        >
          更新
        </Button>
      </ModalFooter>
    </Modal>
  )
}
