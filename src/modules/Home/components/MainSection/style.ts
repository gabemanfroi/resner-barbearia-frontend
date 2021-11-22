import { MainContainer } from 'modules/Shared/components/style';
import styled from 'styled-components';

export const MainSectionContainer = styled(MainContainer)`
  background: url('assets/images/Barbershop04.jpg');
  background-size: cover;
  color: white;

  &::before {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: #000000ac;
  }
`;

export const MainSectionContent = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  .up-content {
    font-size: 60px;
    text-transform: uppercase;
  }

  .middle-content {
    align-items: center;
    .slogan {
      font-size: 45px;
    }
  }

  .down-content {
    .button-group {
      display: flex;
      justify-content: center;
      button {
        margin: 0 10px;
      }
    }
  }
`;
