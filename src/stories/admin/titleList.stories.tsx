import TitleList from "@/modules/admin/titleList"
import { Meta, StoryObj } from "@storybook/react"
import { Accordion } from "@yamada-ui/react"

const meta = {
  component: TitleList,
  decorators: [
    (Story) => (
      <Accordion iconHidden>
        <Story />
      </Accordion>
    ),
  ],
  tags: ["autodocs"],
  title: "yamadaui/TitleList",
} satisfies Meta<typeof TitleList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    copipes: [0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => ({
      body: `test-body-${value}`,
      copipeToTag: [
        {
          tag: { body: "test tag", id: 0 },
        },
      ],
      id: value,
      title: `test-title-${value}`,
    })),
    openModal: () => {},
  },
}
