"use client"

import { event } from "@/analytics/gtag"
import { CommentPayload } from "@/db/query"
import {
  Button,
  FormControl,
  Textarea,
  useNotice,
  VStack,
} from "@yamada-ui/react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  body: string
}

interface CommentFormProps {
  addOptimisticComment: (action: CommentPayload) => void
  copipe_id: number
  postComment: (
    copipe_id: number,
    body: string,
  ) => Promise<
    | undefined
    | {
        error: string
      }
  >
}

export function CommentForm({
  addOptimisticComment,
  copipe_id,
  postComment,
}: CommentFormProps) {
  const { control, formState, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: {
      body: "",
    },
  })

  const notice = useNotice({ placement: "bottom-left", variant: "solid" })

  const validationRules = {
    body: {
      minLength: { message: "コメントを入力して下さい", value: 1 },
      required: "コメントを入力して下さい",
    },
  }

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    event("click", {
      label: "post_comment",
    })

    addOptimisticComment({
      body: data.body,
      copipe_id: copipe_id,
      created_at: new Date(),
      id: Math.floor(Math.random() * 10000),
    })

    const result = await postComment(copipe_id, data.body)

    if (result?.error) {
      notice({
        status: "error",
        title: "投稿失敗",
      })
    } else {
      notice({
        status: "success",
        title: "投稿完了",
      })
      reset()
    }
  }

  return (
    <VStack alignItems="center" as="form" w="full">
      <Controller
        control={control}
        name="body"
        render={({ field, fieldState }) => (
          <FormControl
            errorMessage={fieldState.error?.message}
            invalid={fieldState.invalid}
          >
            <Textarea
              {...field}
              focusBorderColor="secondary"
              id="body"
              placeholder="コメント"
            />
          </FormControl>
        )}
        rules={validationRules.body}
      />
      <Button
        borderColor="secondary"
        color="secondary"
        loading={formState.isSubmitting}
        onClick={handleSubmit(onSubmit)}
        variant="outline"
        w="fit-content"
      >
        コメント
      </Button>
    </VStack>
  )
}
