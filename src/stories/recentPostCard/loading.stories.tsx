import LoadingRecentPostsCard from "@/modules/recentPostCard/loading"
import { theme } from "@/theme"
import { Meta, StoryObj } from "@storybook/react"
import { UIProvider } from "@yamada-ui/react"

const meta = {
  component: LoadingRecentPostsCard,
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
  title: "yamada-ui/LoadingRecentPostsCard",
} satisfies Meta<typeof LoadingRecentPostsCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
