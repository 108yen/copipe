import yamadauiTheme from "@/yamadauiTheme";
import { Meta, StoryObj } from '@storybook/react'
import { UIProvider } from "@yamada-ui/react";
import { CopipeCardItemSkelton } from "@/modules/yamadaui/copipeCardItemSkeleton";

const meta = {
    title: 'yamadaui/CopipeCardItemSkelton',
    component: CopipeCardItemSkelton,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return (
                <UIProvider theme={yamadauiTheme}>
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
    }
} satisfies Meta<typeof CopipeCardItemSkelton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}