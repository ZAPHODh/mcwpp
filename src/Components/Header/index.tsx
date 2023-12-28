'use client'
import { Session } from 'next-auth'
import { Button } from '../Button'
import * as Styled from './styles'
import MessageIcon from '@mui/icons-material/Message'
export type HeaderProps = {
    session: Session | null
    title?: string
}

export const Header = ({ session = null, title }: HeaderProps) => {
    const onClick = () => {}
    return (
        <Styled.Wrapper id="Menu">
            <p>{title}</p>
            <Styled.menuContainer>
                {session ? (
                    <>
                        <Button
                            $primary={false}
                            $backgroundColor="#ffbf00"
                            onClick={onClick}
                        >
                            <MessageIcon />
                        </Button>
                        <Button
                            $primary={false}
                            $backgroundColor="#ffbf00"
                            onClick={onClick}
                        >
                            Sair
                        </Button>
                    </>
                ) : (
                    <Button
                        $primary={false}
                        $backgroundColor="#ffbf00"
                        onClick={onClick}
                    >
                        Entrar
                    </Button>
                )}
            </Styled.menuContainer>
        </Styled.Wrapper>
    )
}
