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
  open: boolean
  onClose: () => void
  copipe: CopipeWithTagPayload | undefined
  tags: TagPayload[]
  updateTags: (
    copipe_id: number,
    tag_ids: number[],
  ) => Promise<
    | {
        error: string
      }
    | undefined
  >
}) {
  const { open, onClose, copipe, tags, updateTags } = props

  const { control, handleSubmit, formState, reset } = useForm<Inputs>({
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
        title: "更新失敗",
        status: "error",
      })
    } else {
      notice({
        title: "更新完了",
        status: "success",
      })
      reset()
    }
  }

  return (
    <Modal isOpen={open} onClose={() => onClose()} size="5xl" p={4} gap={2}>
      <ModalHeader>{copipe?.title}</ModalHeader>
      <Controller
        control={control}
        name="tags"
        render={({ field }) => (
          <MultiAutocomplete
            {...field}
            omitSelectedValues
            items={tags.map((tag) => ({ label: tag.body, value: tag.body }))}
          />
        )}
      />
      <Divider />
      <ModalBody>
        <Text>{copipe?.body}</Text>
      </ModalBody>
      <ModalFooter>
        <Button
          variant="outline"
          color="secondary"
          borderColor="secondary"
          w="fit-content"
          isLoading={formState.isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          更新
        </Button>
      </ModalFooter>
    </Modal>
  )
}
