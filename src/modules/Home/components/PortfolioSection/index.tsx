import { PortfolioSectionContainer } from './style';

const PortfolioSection = () => {
  return (
    <PortfolioSectionContainer>
      <div className="container">
        <div className="services-container">
          <div className="service">
            <img src="assets/images/Service01.jpg" alt="" />
          </div>
          <div className="service">
            <img src="assets/images/Service02.jpg" alt="" />
          </div>
        </div>
      </div>
    </PortfolioSectionContainer>
  );
};

export default PortfolioSection;
