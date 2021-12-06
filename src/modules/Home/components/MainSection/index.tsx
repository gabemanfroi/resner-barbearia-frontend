import { Button } from '@material-ui/core';
import { MainSectionContainer, MainSectionContent } from './style';

const MainSection = () => {
  return (
    <MainSectionContainer>
      <MainSectionContent>
        <div className="up-content">Nisi adipisicing</div>
        <div className="middle-content">
          <h2 className="slogan">
            Proident sit fugiat sint exercitation consectetur velit nostrud et
            excepteur enim.
          </h2>
        </div>
        <div className="down-content">
          <div className="button-group">
            <Button variant="contained">Agende Agora !</Button>
            <Button variant="outlined">Entre em contato</Button>
          </div>
        </div>
      </MainSectionContent>
    </MainSectionContainer>
  );
};

export default MainSection;
