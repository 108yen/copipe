'use client'
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { event } from "@/analytics/gtag";
import { Button, FormControl, Input, Textarea, VStack, useNotice } from "@yamada-ui/react";

type Inputs = {
    title: string;
    body: string;
}

export default function CopipePostForm(props: {
    postNewCopipe: (props: {
        title: string;
        body: string;
    }) => Promise<{
        message: string;
        error?: undefined;
    } | {
        error: string;
        message?: undefined;
    } | undefined>
}) {
    const { postNewCopipe } = props;

    const { control, handleSubmit, reset, formState } = useForm<Inputs>({
        defaultValues: {
            title: '',
            body: ''
        }
    })

    const notice = useNotice({ placement: 'bottom-left', variant: 'solid' })

    const validationRules = {
        title: {
            required: 'タイトルを入力して下さい',
            minLength: { value: 1, message: 'タイトルを入力して下さい' }
        },
        body: {
            required: '本文を入力して下さい',
            minLength: { value: 1, message: '本文を入力して下さい' }
        }
    }
    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        event('click', {
            label: 'post_copipe'
        })

        const result = await postNewCopipe(data)

        if (result?.error) {
            notice({
                title: '投稿失敗',
                status: 'error'
            })
        } else if (result?.message) {
            notice({
                title: '投稿失敗',
                status: 'warning',
                description: result.message
            })
            reset()
        } else {
            notice({
                title: '投稿完了',
                status: 'success'
            })
            reset()
        }
    }

    return (
        <VStack
            as='form'
            alignItems='center'
            w='full'
        >
            <Controller
                name="title"
                control={control}
                rules={validationRules.title}
                render={({ field, fieldState }) => (
                    <FormControl
                        isInvalid={fieldState.invalid}
                        errorMessage={fieldState.error?.message}
                    >
                        <Input
                            {...field}
                            id="title"
                            placeholder="タイトル"
                            focusBorderColor='secondary'
                        />
                    </FormControl>
                )}
            />
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
                            placeholder="本文"
                            focusBorderColor='secondary'
                            height={400}
                        />
                    </FormControl>
                )}
            />
            <Button
                variant='outline'
                color="secondary"
                borderColor='secondary'
                w='fit-content'
                isLoading={formState.isSubmitting}
                onClick={handleSubmit(onSubmit)}
            >
                投稿
            </Button>
        </VStack>
    )

}