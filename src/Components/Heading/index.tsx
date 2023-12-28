import * as Styled from './styles'
type asType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type HeadingProps = {
    children: React.ReactNode | string
    as?: asType
}

export const Heading = ({ children, as = 'h1' }: HeadingProps) => {
    return <Styled.Title as={as}>{children}</Styled.Title>
}
