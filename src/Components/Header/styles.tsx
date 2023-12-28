'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
    ${() => css`
        color: #ffbf00;
        padding: 5px 20px 5px 20px;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: black;
    `}
`
export const menuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
