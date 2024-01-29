import { Meta, StoryObj } from "@storybook/react"
import TitleListItem from "@/modules/admin/titleListItem";
import { Accordion } from "@yamada-ui/react";

const meta = {
    title: 'yamadaui/TitleListItem',
    component: TitleListItem,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Accordion iconHidden>
                <Story />
            </Accordion>
        )

    ]
} satisfies Meta<typeof TitleListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        copipe: {
            id: 0,
            body: 'test copipe',
            title: 'test copipe title',
            copipeToTag: [{
                tag: { id: 0, body: 'test tag' }
            }]
        },
        openModal: () => { }
    }
}
export const NoTag: Story = {
    args: {
        copipe: {
            id: 0,
            body: 'test copipe',
            title: 'test copipe title',
            copipeToTag: []
        },
        openModal: () => { }
    }
}