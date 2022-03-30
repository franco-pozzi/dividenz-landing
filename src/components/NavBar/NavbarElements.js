import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
  background: #fff;
  height: 80px;  
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 10;
  min-width: 250px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 26px;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 94px;
  z-index: 1;
  width: 100%;
  padding: 0 20px 0 0;
  max-width: 1200px;  
`

export const NavLogo = styled(LinkR)`  
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1300px) {
    margin-left: 24px;
  }
`

export const LogoImage = styled.img`
  height: 54px;
  width: 140px;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #333;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
`
export const NavLinks = styled(LinkR)`
  color: #272727;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  line-height: 1.75; 

  &:hover {
    background: linear-gradient(0.5turn,transparent,transparent 55%,#00D7A8 52%,#00D7A8 0%,transparent 67%);
}
`
