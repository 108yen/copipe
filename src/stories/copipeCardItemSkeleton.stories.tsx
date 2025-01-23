import { CopipeCardItemSkelton } from "@/modules/copipeCardItemSkeleton"
import { theme } from "@/theme"
import { Meta, StoryObj } from "@storybook/react"
import { UIProvider } from "@yamada-ui/react"

const meta = {
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
  component: CopipeCardItemSkelton,
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
  title: "yamada-ui/CopipeCardItemSkelton",
} satisfies Meta<typeof CopipeCardItemSkelton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
