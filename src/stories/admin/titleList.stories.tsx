import { Meta, StoryObj } from "@storybook/react"
import { Accordion } from "@yamada-ui/react";
import TitleList from "@/modules/admin/titleList";

const meta = {
    title: 'yamadaui/TitleList',
    component: TitleList,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Accordion iconHidden>
                <Story />
            </Accordion>
        )

    ]
} satisfies Meta<typeof TitleList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        copipes: [0, 1, 2, 3, 4, 5, 6, 7, 8].map(value => ({
            copipe_id: value,
            body: `test-body-${value}`,
            title: `test-title-${value}`,
            tags: [
                { tag_id: 0, tag_body: 'tag' }
            ]
        })),
        openModal: () => { }
    }
}