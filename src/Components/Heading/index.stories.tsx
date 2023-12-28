import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './index'

const meta = {
    title: 'Example/Heading',
    component: Heading,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>
export const Titles: Story = {
    args: {
        children: 'example heading',
    },
}
