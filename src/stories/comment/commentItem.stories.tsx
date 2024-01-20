import yamadauiTheme from "@/yamadauiTheme"
import { CommentItem } from "@/modules/comment/commentItem"
import { UIProvider } from "@yamada-ui/react"
import { Meta, StoryObj } from "@storybook/react"

const meta = {
    title: 'yamadaui/CommentItem',
    component: CommentItem,
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
} satisfies Meta<typeof CommentItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        comment: {
            id: 0,
            created_at: new Date(),
            copipe_id: 0,
            body: 'test',
        }
    }
}

export const LongText: Story = {
    args: {
        comment: {
            id: 0,
            created_at: new Date(),
            copipe_id: 0,
            body: '勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社',
        }
    }
}
