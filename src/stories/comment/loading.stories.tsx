import LoadingComment from "@/modules/comment/loading"
import { theme } from "@/theme"
import { Meta, StoryObj } from "@storybook/react"
import { UIProvider } from "@yamada-ui/react"

const meta = {
  component: LoadingComment,
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
  title: "yamadaui/LoadingComment",
} satisfies Meta<typeof LoadingComment>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
