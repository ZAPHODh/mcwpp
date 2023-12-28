import React from 'react'
import { render } from '@testing-library/react'
import { Header, HeaderProps } from './'
// import MessageIcon from '@mui/icons-material/Message'
describe('Header component', () => {
    const mockProps: HeaderProps = {
        session: null,
        title: 'Test Title',
    }

    it('renders with default props', () => {
        const { getByText } = render(<Header {...mockProps} />)
        const titleElement = getByText('Test Title')
        expect(titleElement).toBeInTheDocument()
    })

    it('renders different buttons based on session prop', () => {
        const { getByText } = render(<Header {...mockProps} />)
        const entrarButton = getByText('Entrar')
        expect(entrarButton).toBeInTheDocument()

        // Simulating a session
        const sessionProps: HeaderProps = {
            ...mockProps,
            session: {
                user: {
                    email: 'dgijisodgjsdg@gmafiosdg',
                    name: 'iusghsdgsdg',
                    image: 'iusshdg',
                },
                expires: 'oisjgoisjdg',
            },
        }

        const { container } = render(<Header {...sessionProps} />)
        const messageIcon = container.querySelector('svg') // Assuming 'MessageIcon' is an SVG
        expect(messageIcon).toBeInTheDocument()
    })
})
