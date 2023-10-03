import Logo from '../Logo';
import { Link } from 'react-router-dom';
import OptionsHeader from '../OptionsHeader';
import IconsHeader from '../IconsHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header () {
  return (
    <HeaderContainer>
      <Link to="/">
      <Logo/>
      </Link>
      <OptionsHeader/>
      <IconsHeader/>
    </HeaderContainer>
  )
}

export default Header