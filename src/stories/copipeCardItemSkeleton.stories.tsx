import { CopipeCardItemSkelton } from "@/modules/copipeCardItemSkeleton"
import { theme } from "@/theme"
import { Meta, StoryObj } from "@storybook/react"
import { UIProvider } from "@yamada-ui/react"

const meta = {
  title: "yamadaui/CopipeCardItemSkelton",
  component: CopipeCardItemSkelton,
  parameters: {
    // layout: 'centered',
  },
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
  argTypes: {
    // color: {
    //     control: 'radio',
    //     options: [
    //         'primary', //
    //         'secondary',
    //         'info',
    //         'warning',
    //         'error'
    //     ]
    // },
    // variant: {
    //     control: 'radio',
    //     options: [
    //         'text', //
    //         'outlined',
    //         'contained'
    //     ]
    // }
  },
} satisfies Meta<typeof CopipeCardItemSkelton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
