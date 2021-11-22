import { PortfolioSectionContainer } from './style';

const PortfolioSection = () => {
  return (
    <PortfolioSectionContainer>
      <div className="container">
        <div className="text">
          <h1>Lorem Lorem Lorem</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            sapiente perspiciatis voluptate nihil laudantium quam, beatae
            veritatis sequi minus praesentium obcaecati ratione reprehenderit
          </p>
        </div>
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
