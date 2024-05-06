import EditModal from "@/modules/admin/editModal"
import { expect } from "@storybook/jest"
import { Meta, StoryObj } from "@storybook/react"
import { screen, userEvent, waitFor, within } from "@storybook/testing-library"

const meta = {
  title: "yamadaui/EditModal",
  component: EditModal,
  tags: ["autodocs"],
} satisfies Meta<typeof EditModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {},
    copipe: {
      id: 0,
      body: "test copipe",
      title: "test copipe title",
      copipeToTag: [
        {
          tag: { id: 0, body: "test tag" },
        },
      ],
    },
    tags: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => ({
      id: value,
      body: `test-${value}`,
      created_at: new Date(),
    })),
    updateTags: async (copipe_id: number, tag_ids: number[]) => {
      return undefined
    },
  },
}
export const LongText: Story = {
  args: {
    open: true,
    onClose: () => {},
    copipe: {
      id: 0,
      body: "勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社",
      title:
        "勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社",
      copipeToTag: [
        {
          tag: { id: 0, body: "test tag" },
        },
      ],
    },
    tags: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => ({
      id: value,
      body: `test-${value}`,
      created_at: new Date(),
    })),
    updateTags: async (copipe_id: number, tag_ids: number[]) => {
      return undefined
    },
  },
}

export const Success: Story = {
  args: {
    open: true,
    onClose: () => {},
    copipe: {
      id: 0,
      body: "test copipe",
      title: "test copipe title",
      copipeToTag: [
        {
          tag: { id: 0, body: "test tag" },
        },
      ],
    },
    tags: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => ({
      id: value,
      body: `test-${value}`,
      created_at: new Date(),
    })),
    updateTags: async (copipe_id: number, tag_ids: number[]) => {
      return undefined
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

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
    open: true,
    onClose: () => {},
    copipe: {
      id: 0,
      body: "test copipe",
      title: "test copipe title",
      copipeToTag: [
        {
          tag: { id: 0, body: "test tag" },
        },
      ],
    },
    tags: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => ({
      id: value,
      body: `test-${value}`,
      created_at: new Date(),
    })),
    updateTags: async (copipe_id: number, tag_ids: number[]) => {
      return { error: "error" }
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitFor(() => expect(screen.queryByText("更新")).toBeInTheDocument())
    const submitButton = screen.getByText("更新")
    await userEvent.click(submitButton)
    await waitFor(() =>
      expect(screen.queryByText("更新失敗")).toBeInTheDocument(),
    )
  },
}
