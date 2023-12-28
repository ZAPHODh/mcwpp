import React from 'react'
import { render } from '@testing-library/react'
import { Heading } from './'

describe('Heading component', () => {
    it('renders with default props', () => {
        const { getByText } = render(<Heading>Hello, World!</Heading>)
        const headingElement = getByText('Hello, World!')
        expect(headingElement.tagName).toBe('H1')
    })

    it('renders with custom "as" prop', () => {
        const { getByText } = render(<Heading as="h2">Custom Heading</Heading>)
        const headingElement = getByText('Custom Heading')
        expect(headingElement.tagName).toBe('H2')
    })
})
