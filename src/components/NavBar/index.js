import { FaBars } from 'react-icons/fa'

import LogoHeader from '../../images/logo-header.svg'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  LogoImage,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <LogoImage src={LogoHeader} alt="React Logo" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='/compania'
              >
                Compañía
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/"
              >
                Productos de inversión
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/blog-prensa"
              >
                Blog & Prensa
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/contacto"
              >
                Contacto
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
