import { UIProvider } from "@yamada-ui/react"
import { Meta, StoryObj } from '@storybook/react'
import { theme } from "@/theme"
import LoadingComment from "@/modules/comment/loading"

const meta = {
  title: 'yamadaui/LoadingComment',
  component: LoadingComment,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <UIProvider theme={theme}>
          <Story />
        </UIProvider>
      )
    },
  ]
} satisfies Meta<typeof LoadingComment>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
