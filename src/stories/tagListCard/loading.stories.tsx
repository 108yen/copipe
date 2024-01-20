import { UIProvider } from "@yamada-ui/react"
import { Meta, StoryObj } from '@storybook/react'
import yamadauiTheme from "@/yamadauiTheme"
import LoadingTagListCard from "@/modules/tagListCard/loading"

const meta = {
    title: 'yamadaui/LoadingTagListCard',
    component: LoadingTagListCard,
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
} satisfies Meta<typeof LoadingTagListCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
