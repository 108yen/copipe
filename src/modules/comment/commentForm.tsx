'use client'

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CopipeComment } from "@/models/comment";
import { event } from "@/analytics/gtag";
import { Button, FormControl, Textarea, VStack, useNotice } from "@yamada-ui/react";

type Inputs = {
    body: string;
}

export default function CommentForm(props: {
    copipe_id: number,
    addOptimisticComment: (action: CopipeComment) => void,
    postComment: (copipe_id: number, body: string) => Promise<{
        error: string;
    } | undefined>
}) {
    const { copipe_id, addOptimisticComment, postComment } = props;

    const { control, handleSubmit, reset, formState } = useForm<Inputs>({
        defaultValues: {
            body: ''
        }
    })

    const notice = useNotice({ placement: 'bottom-left', variant: 'solid' })

    const validationRules = {
        body: {
            required: 'コメントを入力して下さい',
            minLength: { value: 1, message: 'コメントを入力して下さい' }
        }
    }

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {

        event('click', {
            label: 'post_comment'
        })

        addOptimisticComment({
            id: Math.random(),
            body: data.body,
            created_at: new Date()
        })

        const result = await postComment(copipe_id, data.body)

        if (result?.error) {
            notice({
                title: '投稿失敗',
                status: 'error'
            })
        } else {
            notice({
                title: '投稿完了',
                status: 'success'
            })
            reset()
        }
    }

    //prevent submit by enter key down
    const checkKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === `Enter` && !e.shiftKey) {
            e.preventDefault()
        }
    }

    return (
        <VStack
            as='form'
            alignItems='center'
            w='full'
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={e => checkKeyDown(e)}
        >
            <Controller
                name="body"
                control={control}
                rules={validationRules.body}
                render={({ field, fieldState }) => (
                    <FormControl
                        isInvalid={fieldState.invalid}
                        helperMessage="改行: shift + enter"
                        errorMessage={fieldState.error?.message}
                    >
                        <Textarea
                            {...field}
                            id="body"
                            placeholder="コメント"
                            color='secondary'
                            focusBorderColor='secondary'
                        />
                    </FormControl>
                )}
            />
            <Button
                variant='outline'
                color="secondary"
                borderColor='secondary'
                w='fit-content'
                type="submit"
                isLoading={formState.isSubmitting}
            >
                コメント
            </Button>
        </VStack>
    )
}