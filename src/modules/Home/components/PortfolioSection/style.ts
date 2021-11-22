import styled from 'styled-components';

export const PortfolioSectionContainer = styled.section`
  height: 100vh;
  background: url('assets/images/Portfolio.png');
  background-color: #272626;
  background-size: cover;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 10%;
  color: white;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;

    .text {
      width: 70%;
      display: flex;
      flex-direction: column;
    }

    .services-container {
      display: flex;
      .service {
        width: 100%;

        img {
          height: 600px;
        }
      }
    }
  }
`;
