import Starchy from "/assets/wwa_5.jpg";
import * as Styled from "./About.styled";
const About = () => {
  return (
    <Styled.AboutContainer>
      <Styled.AboutImage src={Starchy} alt="Starchy" />
      <Styled.TextContainer>
        <Styled.AboutText>
          Starchy is a web-based game inspired by the classic "Where's Wally?"
          series. Players search for Starchy, a character hidden within various
          scenes, while enjoying a nostalgic and engaging experience. The game
          features multiple levels, each with unique challenges and hidden
          objects to find. Starchy is a web-based game inspired by the classic
          "Where's Wally?" series. Players search for Starchy, a character
          hidden within various scenes, while enjoying a nostalgic and engaging
          experience. The game features multiple levels, each with unique
          challenges and hidden objects to find.
        </Styled.AboutText>
      </Styled.TextContainer>
    </Styled.AboutContainer>
  );
};

export default About;
