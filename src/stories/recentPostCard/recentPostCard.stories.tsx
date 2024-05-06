import RecentPostsCardTemplate from "@/modules/recentPostCard/recentPostCard"
import { theme } from "@/theme"
import { Meta, StoryObj } from "@storybook/react"
import { UIProvider } from "@yamada-ui/react"

const meta = {
  title: "yamadaui/RecentPostsCard",
  component: RecentPostsCardTemplate,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
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
} satisfies Meta<typeof RecentPostsCardTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    copipes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
      return { id: value, title: `${value}つめのコピペ` }
    }),
  },
}

export const LongText: Story = {
  args: {
    copipes: [
      {
        id: 1,
        title:
          "勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社勤務中、１回までなら自費で会社にデリヘル呼んでいい会社",
      },
    ],
  },
}
