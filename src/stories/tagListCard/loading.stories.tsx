import LoadingTagListCard from "@/modules/tagListCard/loading"
import { theme } from "@/theme"
import { Meta, StoryObj } from "@storybook/react"
import { UIProvider } from "@yamada-ui/react"

const meta = {
  title: "yamadaui/LoadingTagListCard",
  component: LoadingTagListCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <UIProvider theme={theme}>
          <Story />
        </UIProvider>
      )
    },
  ],
} satisfies Meta<typeof LoadingTagListCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
