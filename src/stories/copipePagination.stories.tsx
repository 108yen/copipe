import CopipePagination from "@/modules/copipePagination"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent, within } from "@storybook/testing-library"

const meta = {
  component: CopipePagination,
  tags: ["autodocs"],
  title: "yamada-ui/CopipePagination",
} satisfies Meta<typeof CopipePagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    page: 1,
    total: 20,
    url: "/test",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const page = canvas.getByText("2")
    await userEvent.click(page)
  },
}
export const Middle: Story = {
  args: {
    page: 10,
    total: 20,
    url: "/test",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const page = canvas.getByText("9")
    await userEvent.click(page)
  },
}
