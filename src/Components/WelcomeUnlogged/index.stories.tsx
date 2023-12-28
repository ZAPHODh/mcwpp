import type { Meta, StoryObj } from '@storybook/react'
import { WelcomeUnlogged } from './index'

const meta = {
    title: 'Example/WelcomeUnlogged',
    component: WelcomeUnlogged,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof WelcomeUnlogged>

export default meta
type Story = StoryObj<typeof meta>

export const playground: Story = {}
