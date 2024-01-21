import { Meta, StoryObj } from "@storybook/react"
import { screen, userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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
            copipe_id: 0,
            body: 'test copipe',
            title: 'test copipe title',
            tags: [{ tag_id: 0, tag_body: 'test tag' }]
        },
        openModal: () => { }
    }
}
export const NoTag: Story = {
    args: {
        copipe: {
            copipe_id: 0,
            body: 'test copipe',
            title: 'test copipe title',
            tags: [{ tag_id: 0, tag_body: 'null' }]
            // tags: [{ tag_id: 0, tag_body: null }]
        },
        openModal: () => { }
    }
}