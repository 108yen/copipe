import { UIProvider } from "@yamada-ui/react"
import { Meta, StoryObj } from '@storybook/react'
import { theme } from "@/theme"
import LoadingRecentPostsCard from "@/modules/recentPostCard/loading"

const meta = {
    title: 'yamadaui/LoadingRecentPostsCard',
    component: LoadingRecentPostsCard,
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
} satisfies Meta<typeof LoadingRecentPostsCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
