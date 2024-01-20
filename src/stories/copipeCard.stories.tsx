import CopipeCard from "@/modules/copipeCard"
import { Text, UIProvider } from "@yamada-ui/react"
import { Meta, StoryObj } from '@storybook/react'
import yamadauiTheme from "@/yamadauiTheme"
import { CopipeCardItem } from "@/modules/copipeCardItem"
import { CopipeCardItemSkelton } from "@/modules/copipeCardItemSkeleton"

const meta = {
    title: 'yamadaui/CopipeCard',
    component: CopipeCard,
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
} satisfies Meta<typeof CopipeCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: <Text>test</Text>
    }
}

const copipeItem = {
    copipe_id: 0,
    title: '勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社',
    body: '勤務中、１回までなら自費で会社にデリヘル呼んでいい会社ってどうやろか\n\n24： 名無し：23/07/01(土) 16: 33: 23 ID: RZu3\nなんなら女社員は全員デリ嬢にしてくれ\n\n26：名無し：23/07/01(土) 16: 34:01 ID: mTJa\n>> 24\n\nええな\n\n男社員は送迎と電話の取り継ぎするだけや',
    tags: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => {
        return {
            tag_id: value,
            tag_body: `test-${value}`,
        }
    })
}

export const InItem: Story = {
    args: {
        children: <>
            <CopipeCardItem copipeItem={copipeItem} />
            <CopipeCardItem copipeItem={copipeItem} />
        </>
    }
}

export const Skeleton: Story = {
    args: {
        children: <>
            <CopipeCardItemSkelton />
            <CopipeCardItemSkelton />
        </>
    }
}