import { UIProvider } from "@yamada-ui/react"
import { Meta, StoryObj } from '@storybook/react'
import yamadauiTheme from "@/yamadauiTheme"
import LoadingRecentPostsCard from "@/modules/recentPostCard/loading"

const meta = {
    title: 'yamadaui/LoadingRecentPostsCard',
    component: LoadingRecentPostsCard,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
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
} satisfies Meta<typeof LoadingRecentPostsCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
