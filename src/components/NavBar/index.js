import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

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
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      return setScrollNav(true)
    }
    return setScrollNav(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)

    return () => window.removeEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
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
