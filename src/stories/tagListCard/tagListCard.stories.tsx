import TagListCardTemplate from "@/modules/tagListCard/tagListCard"
import { theme } from "@/theme"
import { Meta, StoryObj } from "@storybook/react"
import { UIProvider } from "@yamada-ui/react"

const meta = {
  component: TagListCardTemplate,
  decorators: [
    (Story) => {
      return (
        <UIProvider theme={theme}>
          <Story />
        </UIProvider>
      )
    },
  ],
  tags: ["autodocs"],
  title: "yamada-ui/TagListCard",
} satisfies Meta<typeof TagListCardTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tags: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ].map((value) => {
      return {
        body: `tag-${value}`,
        created_at: new Date(),
        id: value,
      }
    }),
  },
}
