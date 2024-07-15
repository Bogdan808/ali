import styled from 'styled-components'
import { Logo } from './components/Logo/Logo'
import { Cart } from './components/Cart/Cart'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../core/routes'
export const Header = () => {
  return (
    <Wrapper>
      <RowAligner>
        <LogoContainer>
          <LogoLink>
            <Link to={AppRoutes.main}>
              <Logo />
            </Link>
          </LogoLink>
        </LogoContainer>
      </RowAligner>
      <RowAligner>
        <Nav>
          <NavList>
            <NavItem>
              <Cart />
            </NavItem>
          </NavList>
        </Nav>
      </RowAligner>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  align-items: center;
  background-color: #fe2722;
  border-radius: 6px;
  flex-direction: row;
  grid-gap: 0;
  margin-top: 12px;
  padding: 8px;
  top: 0;
  display: flex;
  justify-content: space-between;
`

const RowAligner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div``

const LogoLink = styled.div`
  display: flex;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  margin-right: 1rem;
`
