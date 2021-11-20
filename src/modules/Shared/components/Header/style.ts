import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background: #07070758;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: space-evenly;
  padding: 0 10%;
  z-index: 9;

  .logo-container {
    width: 200px;
    height: 100%;
    background: url('assets/images/logo.svg');
    background-size: 300px;
    background-position-x: 50%;
    background-position-y: 45%;
  }
`;

export const NavContainer = styled.nav`
  color: white;
  display: flex;

  ul {
    display: flex;
  }

  a {
    font-size: 20px;
    margin-left: 8px;
    text-transform: uppercase;

    :hover {
      color: yellow;
    }
  }
`;
