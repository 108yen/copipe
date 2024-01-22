import { UIProvider } from "@yamada-ui/react"
import { Meta, StoryObj } from '@storybook/react'
import { theme } from "@/theme"
import LoadingSearchForm from "@/modules/loadingSearchForm"

const meta = {
    title: 'yamadaui/LoadingSearchForm',
    component: LoadingSearchForm,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return (
                <UIProvider theme={theme}>
                    <Story />
                </UIProvider>
            )
        },
    ]
} satisfies Meta<typeof LoadingSearchForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
}
export const Text: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
    args: {
        text: 'test'
    }
}
