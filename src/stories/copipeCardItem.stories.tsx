import { CopipeCardItem } from "@/modules/copipeCardItem";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Meta, StoryObj } from '@storybook/react'
import theme from "@/theme/theme";

const meta = {
    title: 'mui/CopipeCardItem',
    component: CopipeCardItem,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return (
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Story />
                </ThemeProvider>
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
} satisfies Meta<typeof CopipeCardItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        copipeItem: {
            copipe_id: 0,
            title: 'test',
            body: 'test',
            tags: [
                {
                    tag_id: 0,
                    tag_body: 'test'
                }
            ]
        }
    }
}