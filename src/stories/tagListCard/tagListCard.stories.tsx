import { UIProvider } from "@yamada-ui/react"
import { Meta, StoryObj } from '@storybook/react'
import yamadauiTheme from "@/yamadauiTheme"
import TagListCard from "@/modules/tagListCard/tagListCard"

const meta = {
    title: 'yamadaui/TagListCard',
    component: TagListCard,
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
} satisfies Meta<typeof TagListCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        tags: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(value => {
            return {
                id: value,
                created_at: new Date(),
                body: `tag-${value}`
            }
        })
    }
}