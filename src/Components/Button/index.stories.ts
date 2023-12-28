import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './index'

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        $backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const demonstration: Story = {
    args: {
        $primary: true,
        children: 'click',
        disabled: false,
    },
}
