import EditModal from "@/modules/admin/editModal"
import { expect } from "@storybook/jest"
import { Meta, StoryObj } from "@storybook/react"
import { screen, userEvent, waitFor } from "@storybook/testing-library"

const meta = {
  component: EditModal,
  tags: ["autodocs"],
  title: "yamada-ui/EditModal",
} satisfies Meta<typeof EditModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    copipe: {
      body: "test copipe",
      copipeToTag: [
        {
          tag: { body: "test tag", id: 0 },
        },
      ],
      id: 0,
      title: "test copipe title",
    },
    onClose: () => {},
    open: true,
    tags: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => ({
      body: `test-${value}`,
      created_at: new Date(),
      id: value,
    })),
    updateTags: async () => {
      return undefined
    },
  },
}
export const LongText: Story = {
  args: {
    copipe: {
      body: "勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社",
      copipeToTag: [
        {
          tag: { body: "test tag", id: 0 },
        },
      ],
      id: 0,
      title:
        "勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社",
    },
    onClose: () => {},
    open: true,
    tags: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => ({
      body: `test-${value}`,
      created_at: new Date(),
      id: value,
    })),
    updateTags: async () => {
      return undefined
    },
  },
}

export const Success: Story = {
  args: {
    copipe: {
      body: "test copipe",
      copipeToTag: [
        {
          tag: { body: "test tag", id: 0 },
        },
      ],
      id: 0,
      title: "test copipe title",
    },
    onClose: () => {},
    open: true,
    tags: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => ({
      body: `test-${value}`,
      created_at: new Date(),
      id: value,
    })),
    updateTags: async () => {
      return undefined
    },
  },
  play: async () => {
    await waitFor(() => expect(screen.queryByText("更新")).toBeInTheDocument())
    const submitButton = screen.getByText("更新")
    await userEvent.click(submitButton)
    await waitFor(() =>
      expect(screen.queryByText("更新完了")).toBeInTheDocument(),
    )
  },
}

export const Error: Story = {
  args: {
    copipe: {
      body: "test copipe",
      copipeToTag: [
        {
          tag: { body: "test tag", id: 0 },
        },
      ],
      id: 0,
      title: "test copipe title",
    },
    onClose: () => {},
    open: true,
    tags: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => ({
      body: `test-${value}`,
      created_at: new Date(),
      id: value,
    })),
    updateTags: async () => {
      return { error: "error" }
    },
  },
  play: async () => {
    await waitFor(() => expect(screen.queryByText("更新")).toBeInTheDocument())
    const submitButton = screen.getByText("更新")
    await userEvent.click(submitButton)
    await waitFor(() =>
      expect(screen.queryByText("更新失敗")).toBeInTheDocument(),
    )
  },
}
