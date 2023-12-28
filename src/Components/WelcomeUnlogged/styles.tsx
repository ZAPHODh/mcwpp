'use client'

import Image from 'next/image'
import styled, { css } from 'styled-components'

export const Logo = styled(Image)`
    ${() => css`
        z-index: 2;

        @media (max-width: 768px) {
            width: 80%;
            height: 210px;
        }
    `}
`
export const Background = styled(Image)`
    ${() => css`
        filter: blur(5px);
        position: absolute;
        z-index: 1;
        @media (min-width: 768px) {
            width: 500px;
            height: auto;
        }
    `}
`
export const Wrapper = styled.section`
    ${() => css`
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #ffbf00;
        width: 100vw;
        height: 100vh;
        background-color: black;
        z-index: 0;
    `}
`
export const Alert = styled.div`
    ${() => css`
        border-radius: 5px;
        top: 5rem;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 500px;
        height: 200px;
        background-color: rgb(0, 0, 0, 0.5);
        @media (max-width: 768px) {
            width: 80%;
            height: 150px;
        }
    `}
`
