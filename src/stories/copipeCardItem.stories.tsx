import { CopipeCardItem } from "@/modules/copipeCardItem"
import { UIProvider } from "@yamada-ui/react"
import { Meta, StoryObj } from '@storybook/react'
import { theme } from "@/theme"

const meta = {
    title: 'yamadaui/CopipeCardItem',
    component: CopipeCardItem,
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
} satisfies Meta<typeof CopipeCardItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        copipeItem: {
            id: 0,
            title: 'test',
            body: 'test',
            copipeToTag: [
                {
                    tag: {
                        id: 0,
                        body: 'test'
                    }
                }
            ]
        }
    }
}
export const LongText: Story = {
    args: {
        copipeItem: {
            id: 0,
            title: '勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社',
            body: '勤務中、１回までなら自費で会社にデリヘル呼んでいい会社ってどうやろか\n\n24： 名無し：23/07/01(土) 16: 33: 23 ID: RZu3\nなんなら女社員は全員デリ嬢にしてくれ\n\n26：名無し：23/07/01(土) 16: 34:01 ID: mTJa\n>> 24\n\nええな\n\n男社員は送迎と電話の取り継ぎするだけや',
            copipeToTag: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => {
                return {
                    tag: {
                        id: value,
                        body: `test-${value}`,
                    }
                }
            })
        }
    }
}