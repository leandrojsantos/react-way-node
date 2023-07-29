import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import styled from 'styled-components'

const IconContainer = styled.ul`
    display: flex;
    align-items: center;
`
const IconImage = styled.li`
    margin-right: 40px;
    width: 25px;
`

const iconesHeader = [perfil, sacola]

function IconsHeader() {
    return (
        <IconContainer>
            { iconesHeader.map((loop) => (
            <IconImage>
                <img src={loop}></img>
            </IconImage>
            ))}
        </IconContainer>
    )
}

export default IconsHeader