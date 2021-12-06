import { HeaderContainer, NavContainer } from './style';
import HeaderNavItem from '../HeaderNavItem';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="" className="logo-container" />
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
