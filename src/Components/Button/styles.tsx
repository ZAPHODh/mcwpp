'use client'

import styled, { css } from 'styled-components'
import { ButtonProps } from '.'
type ButtonStyledProps = Omit<ButtonProps, 'children' | 'onClick'>
const getSizeWidth = (size?: 'small' | 'medium' | 'large') => {
    switch (size) {
        case 'small':
            return '40px' // Defina o valor desejado para 'small'
        case 'medium':
            return '60px' // Defina o valor desejado para 'medium'
        case 'large':
            return '80px' // Defina o valor desejado para 'large'
        default:
            return 'auto' // Valor padrão ou tratamento para outros casos
    }
}
export const Wrapper = styled.button<ButtonStyledProps>`
    ${({ $primary, $backgroundColor, size }) => css`
        margin: 5px;
        border: ${$primary ? 'none' : `1px solid ${$backgroundColor}`};
        height: 30px;
        border-radius: 10px;
        outline: none;
        color: ${$primary ? 'inherit' : $backgroundColor};
        background-color: ${$primary ? $backgroundColor : 'transparent'};
        width: ${getSizeWidth(size)};

        &:hover {
            cursor: pointer;
        }
        &:disabled {
            background-color: #9d9b9b;
            cursor: default;
            color: white;
            border: none;
        }
    `}
`
