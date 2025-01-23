import { CommentItem } from "@/modules/comment/commentItem"
import { Meta, StoryObj } from "@storybook/react"

const meta = {
  component: CommentItem,
  tags: ["autodocs"],
  title: "yamadaui/CommentItem",
} satisfies Meta<typeof CommentItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    comment: {
      body: "test",
      copipe_id: 0,
      created_at: new Date(),
      id: 0,
    },
  },
}

export const LongText: Story = {
  args: {
    comment: {
      body: "勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社",
      copipe_id: 0,
      created_at: new Date(),
      id: 0,
    },
  },
}
