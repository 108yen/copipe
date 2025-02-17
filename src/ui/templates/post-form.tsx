"use client"
import { event } from "@/analytics/gtag"
import { postCopipe } from "@/server-actions"
import {
  Button,
  Container,
  FormControl,
  Input,
  Textarea,
  useNotice,
  VStack,
} from "@yamada-ui/react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  body: string
  title: string
}

export function CopipePostForm() {
  const { control, formState, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: {
      body: "",
      title: "",
    },
  })

  const notice = useNotice({ placement: "bottom-left", variant: "solid" })

  const validationRules = {
    body: {
      minLength: { message: "本文を入力して下さい", value: 1 },
      required: "本文を入力して下さい",
    },
    title: {
      minLength: { message: "タイトルを入力して下さい", value: 1 },
      required: "タイトルを入力して下さい",
    },
  }
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    event("click", {
      label: "post_copipe",
    })

    try {
      const result = await postCopipe(data)

      if (result) {
        notice({
          description: result.message,
          status: "warning",
          title: "投稿失敗",
        })
        reset()
      } else {
        notice({
          status: "success",
          title: "投稿完了",
        })
        reset()
      }
    } catch {
      notice({
        status: "error",
        title: "投稿失敗",
      })
    }
  }

  return (
    <Container>
      <VStack alignItems="center" as="form" w="full">
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState }) => (
            <FormControl
              errorMessage={fieldState.error?.message}
              invalid={fieldState.invalid}
            >
              <Input
                {...field}
                focusBorderColor="secondary"
                id="title"
                placeholder="タイトル"
              />
            </FormControl>
          )}
          rules={validationRules.title}
        />

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
                autosize
                focusBorderColor="secondary"
                id="body"
                maxRows={30}
                minRows={4}
                placeholder="本文"
              />
            </FormControl>
          )}
          rules={validationRules.body}
        />

        <Button
          apply="buttonStyles.default"
          colorScheme="secondary"
          loading={formState.isSubmitting}
          onClick={handleSubmit(onSubmit)}
          variant="outline"
        >
          投稿
        </Button>
      </VStack>
    </Container>
  )
}
