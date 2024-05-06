import CopipePostForm from "@/modules/copipePostForm"
import { sleep } from "@/utils/sleep"
import { expect } from "@storybook/jest"
import { Meta, StoryObj } from "@storybook/react"
import { screen, userEvent, waitFor, within } from "@storybook/testing-library"

const meta = {
  title: "yamadaui/CopipePostForm",
  component: CopipePostForm,
  tags: ["autodocs"],
} satisfies Meta<typeof CopipePostForm>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    postNewCopipe: async () => {
      return undefined
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const titleInput = canvas.getByPlaceholderText("タイトル")
    await userEvent.type(titleInput, "test title")
    const bodyInput = canvas.getByPlaceholderText("本文")
    await userEvent.type(bodyInput, "test body")
    const submitButton = canvas.getByRole("button")
    await userEvent.click(submitButton)

    await waitFor(() =>
      expect(screen.queryByText("投稿完了")).toBeInTheDocument(),
    )
  },
}

export const Error: Story = {
  args: {
    postNewCopipe: async () => {
      return { error: "error" }
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const titleInput = canvas.getByPlaceholderText("タイトル")
    await userEvent.type(titleInput, "test title")
    const bodyInput = canvas.getByPlaceholderText("本文")
    await userEvent.type(bodyInput, "test body")
    const submitButton = canvas.getByRole("button")
    await userEvent.click(submitButton)

    await waitFor(() =>
      expect(screen.queryByText("投稿失敗")).toBeInTheDocument(),
    )
  },
}

export const Message: Story = {
  args: {
    postNewCopipe: async () => {
      return { message: "test error" }
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const titleInput = canvas.getByPlaceholderText("タイトル")
    await userEvent.type(titleInput, "test title")
    const bodyInput = canvas.getByPlaceholderText("本文")
    await userEvent.type(bodyInput, "test body")
    const submitButton = canvas.getByRole("button")
    await userEvent.click(submitButton)

    await waitFor(() =>
      expect(screen.queryByText("test error")).toBeInTheDocument(),
    )
  },
}

export const Loading: Story = {
  args: {
    postNewCopipe: async () => {
      await sleep(3)

      return undefined
    },
  },
}
