import CopipePagination from "@/modules/copipePagination"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent, within } from "@storybook/testing-library"

const meta = {
  title: "yamadaui/CopipePagination",
  component: CopipePagination,
  tags: ["autodocs"],
} satisfies Meta<typeof CopipePagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    url: "/test",
    total: 20,
    page: 1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const page = canvas.getByText("2")
    await userEvent.click(page)
  },
}
export const Middle: Story = {
  args: {
    url: "/test",
    total: 20,
    page: 10,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const page = canvas.getByText("9")
    await userEvent.click(page)
  },
}
