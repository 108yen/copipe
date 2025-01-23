import CommentForm from "@/modules/comment/commentForm"
import { Meta, StoryObj } from "@storybook/react"

const meta = {
  component: CommentForm,
  tags: ["autodocs"],
  title: "yamadaui/CommentForm",
} satisfies Meta<typeof CommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    addOptimisticComment: () => {},
    copipe_id: 0,
    postComment: async () => {
      return undefined
    },
  },
}

export const Error: Story = {
  args: {
    addOptimisticComment: () => {},
    copipe_id: 0,
    postComment: async () => {
      return { error: "error" }
    },
  },
}

export const Loading: Story = {
  args: {
    addOptimisticComment: () => {},
    copipe_id: 0,
    postComment: async () => {
      const sleep = (second: number) =>
        new Promise((resolve) => setTimeout(resolve, second * 1000))
      await sleep(3)

      return undefined
    },
  },
}
