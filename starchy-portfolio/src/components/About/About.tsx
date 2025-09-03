import Starchy from "/assets/wwa_5.jpg";
import * as Styled from "./About.styled";
const About = () => {
  return (
    <Styled.AboutContainer>
      <Styled.AboutImage src={Starchy} alt="Starchy" />
      <Styled.TextContainer>
        <Styled.AboutText>
          Nazywam się Marcin Skrobiszewski, jestem reżyserem teledysków
          specjalizującym się w polskiej scenie rapowej. Moje produkcje
          wyróżniają się unikalnym stylem nagrywania i montażu - to połączenie
          surowej autentyczności z filmowym wyczuciem kadru, które przyciąga
          uwagę zarówno artystów, jak i widzów. Obecnie mieszkam w Warszawie -
          mieście, które otworzyło przede mną nowe możliwości i pozwoliło wejść
          na jeszcze wyższy poziom twórczy. Rok 2024 był przełomowy dla marki,
          którą tworzę - zrealizowałem projekty, które rezonowały na scenie i
          pokazały, że warto iść własną drogą. Nie zwalniam tempa. Każdy klip to
          dla mnie okazja, żeby pokazać świeże podejście, unikalną estetykę i
          technikę, która wykracza poza schematy. Jeśli szukasz obrazu z
          charakterem i prawdziwym stylem - jesteś we właściwym miejscu.
        </Styled.AboutText>
      </Styled.TextContainer>
    </Styled.AboutContainer>
  );
};

export default About;
