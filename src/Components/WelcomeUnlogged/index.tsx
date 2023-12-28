import * as Styled from './styles'
import bg from '../../../public/images/effectBG.png'
import logo from '../../../public/images/MAUROLOGODOIS1.png'

export const WelcomeUnlogged = () => {
    return (
        <Styled.Wrapper>
            <Styled.Alert>Por favor, efetue o login</Styled.Alert>
            <Styled.Logo
                priority
                src={logo.src}
                alt="logo-image"
                width={600}
                height={300}
            />
            <Styled.Background
                priority
                alt="background-image"
                width={380}
                height={350}
                src={bg.src}
            />
        </Styled.Wrapper>
    )
}
