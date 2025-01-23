import LoadingTagListCard from "@/modules/tagListCard/loading"
import { theme } from "@/theme"
import { Meta, StoryObj } from "@storybook/react"
import { UIProvider } from "@yamada-ui/react"

const meta = {
  component: LoadingTagListCard,
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
  title: "yamada-ui/LoadingTagListCard",
} satisfies Meta<typeof LoadingTagListCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
