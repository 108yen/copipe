import { UIProvider } from "@yamada-ui/react"
import { Meta, StoryObj } from '@storybook/react'
import { theme } from "@/theme"
import SearchForm from "@/modules/searchForm"

const meta = {
    title: 'yamadaui/SearchForm',
    component: SearchForm,
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
} satisfies Meta<typeof SearchForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
}
