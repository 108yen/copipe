import LoadingComment from "@/modules/comment/loading"
import { theme } from "@/theme"
import { Meta, StoryObj } from "@storybook/react"
import { UIProvider } from "@yamada-ui/react"

const meta = {
  title: "yamadaui/LoadingComment",
  component: LoadingComment,
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
} satisfies Meta<typeof LoadingComment>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
