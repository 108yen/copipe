import { UIProvider } from "@yamada-ui/react"
import { Meta, StoryObj } from '@storybook/react'
import AppBar from "@/modules/appBar"
import { theme } from "@/theme"

const meta = {
    title: 'yamadaui/AppBar',
    component: AppBar,
    parameters: {
        // layout: 'centered',
    },
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
} satisfies Meta<typeof AppBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
