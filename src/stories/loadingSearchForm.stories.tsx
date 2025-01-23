import LoadingSearchForm from "@/modules/loadingSearchForm"
import { theme } from "@/theme"
import { Meta, StoryObj } from "@storybook/react"
import { UIProvider } from "@yamada-ui/react"

const meta = {
  component: LoadingSearchForm,
  decorators: [
    (Story) => {
      return (
        <UIProvider theme={theme}>
          <Story />
        </UIProvider>
      )
    },
  ],
  parameters: {
    // layout: 'centered',
  },
  tags: ["autodocs"],
  title: "yamada-ui/LoadingSearchForm",
} satisfies Meta<typeof LoadingSearchForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
}
export const Text: Story = {
  args: {
    text: "test",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
}
