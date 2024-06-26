import TitleList from "@/modules/admin/titleList"
import { Meta, StoryObj } from "@storybook/react"
import { Accordion } from "@yamada-ui/react"

const meta = {
  title: "yamadaui/TitleList",
  component: TitleList,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Accordion iconHidden>
        <Story />
      </Accordion>
    ),
  ],
} satisfies Meta<typeof TitleList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    copipes: [0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => ({
      id: value,
      body: `test-body-${value}`,
      title: `test-title-${value}`,
      copipeToTag: [
        {
          tag: { id: 0, body: "test tag" },
        },
      ],
    })),
    openModal: () => {},
  },
}
