import styled from 'styled-components';

export const AboutSectionContainer = styled.section`
  height: 100vh;
  background: url('assets/images/AboutUs.png');
  background-color: #faf6f6;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 10%;

  .quem-somos-primeiro,
  .quem-somos-segundo {
    width: 100%;
    display: flex;

    .text {
      width: 70%;
      margin: 48px;

      h1 {
        font-size: 28px;
        color: #cf9800;
        margin-bottom: 10px;
        text-transform: uppercase;
        border-left: 2px solid #181818;
        padding: 5px;
      }
      p {
        font-size: 20px;
        color: black !important;
      }
    }

    .image-container {
      width: 30%;
      position: relative;
    }
  }

  .quem-somos-primeiro {
    flex-direction: row-reverse;
    padding-bottom: 75px;
    .image-container {
      &::after {
        content: '';
        position: absolute;
        top: 13px;
        left: 15px;
        border: 2px solid #dda200;
        z-index: 9;
        height: 100%;
        width: 100%;
      }
    }
  }

  .quem-somos-segundo {
    .image-container {
      &::after {
        content: '';
        position: absolute;
        top: 13px;
        right: 15px;
        border: 2px solid #dda200;
        z-index: 9;
        height: 100%;
        width: 100%;
      }
    }
  }
`;
