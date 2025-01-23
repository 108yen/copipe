import { CopipeCardItem } from "@/modules/copipeCardItem"
import { theme } from "@/theme"
import { Meta, StoryObj } from "@storybook/react"
import { UIProvider } from "@yamada-ui/react"

const meta = {
  component: CopipeCardItem,
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
  title: "yamadaui/CopipeCardItem",
} satisfies Meta<typeof CopipeCardItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    copipeItem: {
      body: "test",
      copipeToTag: [
        {
          tag: {
            body: "test",
            id: 0,
          },
        },
      ],
      id: 0,
      title: "test",
    },
  },
}
export const LongText: Story = {
  args: {
    copipeItem: {
      body: "勤務中、１回までなら自費で会社にデリヘル呼んでいい会社ってどうやろか\n\n24： 名無し：23/07/01(土) 16: 33: 23 ID: RZu3\nなんなら女社員は全員デリ嬢にしてくれ\n\n26：名無し：23/07/01(土) 16: 34:01 ID: mTJa\n>> 24\n\nええな\n\n男社員は送迎と電話の取り継ぎするだけや",
      copipeToTag: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
        return {
          tag: {
            body: `test-${value}`,
            id: value,
          },
        }
      }),
      id: 0,
      title:
        "勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社",
    },
  },
}
