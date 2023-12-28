import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './index'

const meta = {
    title: 'Example/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const noLogged: Story = {
    args: {
        session: null,
        title: 'Header',
    },
}
export const Logged: Story = {
    args: {
        session: {
            user: {
                name: 'luis',
                email: 'luispaulo.ni@gmail.com',
                image: 'imagem',
            },
            expires: 'seila',
        },
        title: 'Header',
    },
}
