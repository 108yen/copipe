import { CommentList } from "@/modules/comment/commentList"
import { theme } from "@/theme"
import { Meta, StoryObj } from "@storybook/react"
import { UIProvider } from "@yamada-ui/react"

const meta = {
  component: CommentList,
  decorators: [
    (Story) => {
      return (
        <UIProvider theme={theme}>
          <Story />
        </UIProvider>
      )
    },
  ],
  tags: ["autodocs"],
  title: "yamadaui/CommentList",
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    comments: [0, 1, 2, 3].map((value) => {
      return {
        body: `test-${value}`,
        copipe_id: 0,
        created_at: new Date(),
        id: value,
      }
    }),
  },
}

export const LongText: Story = {
  args: {
    comments: [
      {
        body: "勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社",
        copipe_id: 0,
        created_at: new Date(),
        id: 0,
      },
    ],
  },
}
