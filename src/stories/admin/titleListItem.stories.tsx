import TitleListItem from "@/modules/admin/titleListItem"
import { Meta, StoryObj } from "@storybook/react"
import { Accordion } from "@yamada-ui/react"

const meta = {
  component: TitleListItem,
  decorators: [
    (Story) => (
      <Accordion iconHidden>
        <Story />
      </Accordion>
    ),
  ],
  tags: ["autodocs"],
  title: "yamadaui/TitleListItem",
} satisfies Meta<typeof TitleListItem>

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
    openModal: () => {},
  },
}
export const NoTag: Story = {
  args: {
    copipe: {
      body: "test copipe",
      copipeToTag: [],
      id: 0,
      title: "test copipe title",
    },
    openModal: () => {},
  },
}
