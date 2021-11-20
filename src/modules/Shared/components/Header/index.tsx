import { HeaderContainer, NavContainer } from './style';
import HeaderNavItem from '../HeaderNavItem';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo-container"></div>
      <NavContainer>
        <ul>
          <HeaderNavItem href="" title="Início" />
          <HeaderNavItem href="sobre" title="Sobre Nós" />
          <HeaderNavItem href="portfolio" title="Portfólio" />
          <HeaderNavItem href="agendamento" title="Agende Seu Horário" />
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
