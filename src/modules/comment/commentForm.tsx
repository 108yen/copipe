"use client"

import { event } from "@/analytics/gtag"
import { CommentPayload } from "@/db/query"
import {
  Button,
  FormControl,
  Textarea,
  VStack,
  useNotice,
} from "@yamada-ui/react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  body: string
}

export default function CommentForm(props: {
  copipe_id: number
  addOptimisticComment: (action: CommentPayload) => void
  postComment: (
    copipe_id: number,
    body: string,
  ) => Promise<
    | {
        error: string
      }
    | undefined
  >
}) {
  const { copipe_id, addOptimisticComment, postComment } = props

  const { control, handleSubmit, reset, formState } = useForm<Inputs>({
    defaultValues: {
      body: "",
    },
  })

  const notice = useNotice({ placement: "bottom-left", variant: "solid" })

  const validationRules = {
    body: {
      required: "コメントを入力して下さい",
      minLength: { value: 1, message: "コメントを入力して下さい" },
    },
  }

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    event("click", {
      label: "post_comment",
    })

    addOptimisticComment({
      id: Math.floor(Math.random() * 10000),
      body: data.body,
      created_at: new Date(),
      copipe_id: copipe_id,
    })

    const result = await postComment(copipe_id, data.body)

    if (result?.error) {
      notice({
        title: "投稿失敗",
        status: "error",
      })
    } else {
      notice({
        title: "投稿完了",
        status: "success",
      })
      reset()
    }
  }

  return (
    <VStack as="form" alignItems="center" w="full">
      <Controller
        name="body"
        control={control}
        rules={validationRules.body}
        render={({ field, fieldState }) => (
          <FormControl
            isInvalid={fieldState.invalid}
            errorMessage={fieldState.error?.message}
          >
            <Textarea
              {...field}
              id="body"
              placeholder="コメント"
              focusBorderColor="secondary"
            />
          </FormControl>
        )}
      />
      <Button
        variant="outline"
        color="secondary"
        borderColor="secondary"
        w="fit-content"
        isLoading={formState.isSubmitting}
        onClick={handleSubmit(onSubmit)}
      >
        コメント
      </Button>
    </VStack>
  )
}
