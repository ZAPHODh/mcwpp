'use client'

import * as Styled from './styles'

export type ButtonProps = {
    $primary?: boolean
    $backgroundColor?: string
    size?: 'small' | 'medium' | 'large'
    children: React.ReactNode | string
    disabled?: boolean
    onClick?: () => void
}

export const Button = ({
    $primary = false,
    size = 'medium',
    $backgroundColor = 'black',
    children,
    disabled = false,
    onClick,
}: ButtonProps) => {
    return (
        <Styled.Wrapper
            disabled={disabled}
            onClick={onClick}
            $primary={$primary}
            size={size}
            $backgroundColor={$backgroundColor}
        >
            {children}
        </Styled.Wrapper>
    )
}
