import { Meta, StoryObj } from "@storybook/react"
import CopipePostForm from "@/modules/copipePostForm"

const meta = {
    title: 'yamadaui/CopipePostForm',
    component: CopipePostForm,
    tags: ['autodocs']
} satisfies Meta<typeof CopipePostForm>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
    args: {
        postNewCopipe: async () => {
            return undefined
        }
    }
}

export const Error: Story = {
    args: {
        postNewCopipe: async () => {
            return { error: 'error' }
        }
    }
}

export const Message: Story = {
    args: {
        postNewCopipe: async () => {
            return { message: 'test error' }
        }
    }
}

export const Loading: Story = {
    args: {
        postNewCopipe: async () => {
            const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000))
            await sleep(3)

            return undefined
        }
    }
}
