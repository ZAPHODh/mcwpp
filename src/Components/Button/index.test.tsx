import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { Button } from './'

describe('<Button Component />', () => {
    it('should render a button with given text', () => {
        const buttonText = 'Click me'
        const { getByText } = render(<Button>{buttonText}</Button>)

        const button = getByText(buttonText)
        expect(button).toBeInTheDocument()
        expect(button.tagName).toBe('BUTTON')
    })

    it('should call onClick callback when clicked', () => {
        const onClickMock = jest.fn()
        const { getByText } = render(
            <Button onClick={onClickMock}>Click me</Button>
        )

        const button = getByText('Click me')
        fireEvent.click(button)

        expect(onClickMock).toHaveBeenCalled()
    })

    it('should be disabled when disabled prop is true', () => {
        const { getByText } = render(<Button disabled>Click me</Button>)

        const button = getByText('Click me') as HTMLButtonElement
        expect(button.disabled).toBe(true)
    })
})
