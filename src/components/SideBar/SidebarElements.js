import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: #fff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const CloseIcon = styled(FaTimes)`
  
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  margin-top: 45%;

  @media screen and (min-width: 820px) {
    margin-top: 25%;
  }
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 60px);
  text-align: center;

  @media screen and (min-width: 820px) {
    grid-template-rows: repeat(4, 100px);
  }
`

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;  
  cursor: pointer;
  font-weight: bold;
  color: #272727;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }

  @media screen and (min-width: 820px) {
    font-size: 35px;
  }
`

export const SidebarContactInfo = styled.div`
  
`

export const SidebarContactItem = styled.div`
  line-height: 1.5em;
  font-size: 14px;
  text-align: center;
  color: #272727;
  font-weight: 600;

  @media screen and (min-width: 820px) {
    font-size: 21px;
  }
`
