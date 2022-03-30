import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarContactInfo,
  SidebarContactItem,
} from './SidebarElements'

const SideBar = ({ isOpen, toggle }) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/compania" onClick={toggle}>
            Compañia
          </SidebarLink>
          <SidebarLink to="/blog-prensa" onClick={toggle}>
            Prensa
          </SidebarLink>
          <SidebarLink to="/contacto" onClick={toggle}>
            Contacto
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <SidebarContactInfo>
        <SidebarContactItem>info@dividenz.com</SidebarContactItem>
        <SidebarContactItem>+54 (11) 2000-8569</SidebarContactItem>
        <SidebarContactItem>Av. del Libertador 5478, Piso 11 y 12.</SidebarContactItem>
        <SidebarContactItem>Ciudad de Buenos Aires, Argentina</SidebarContactItem>
      </SidebarContactInfo>
    </SidebarContainer>
  )
}

export default SideBar