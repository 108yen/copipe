import yamadauiTheme from "@/yamadauiTheme"
import { UIProvider } from "@yamada-ui/react"
import { Meta, StoryObj } from "@storybook/react"
import CommentForm from "@/modules/comment/commentForm"

const meta = {
    title: 'yamadaui/CommentForm',
    component: CommentForm,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return (
                <UIProvider theme={yamadauiTheme}>
                    <Story />
                </UIProvider>
            )
        },
    ]
} satisfies Meta<typeof CommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
    args: {
        copipe_id: 0,
        addOptimisticComment: () => { },
        postComment: async () => {
            return undefined
        }
    }
}

export const Error: Story = {
    args: {
        copipe_id: 0,
        addOptimisticComment: () => { },
        postComment: async () => {
            return { error: 'error' }
        }
    }
}

export const Loading: Story = {
    args: {
        copipe_id: 0,
        addOptimisticComment: () => { },
        postComment: async () => {
            const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000))
            await sleep(3)

            return undefined
        }
    }
}
