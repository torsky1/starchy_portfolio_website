import styled from "styled-components";
import SliderComponent from "react-slick";
export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 20px;
  padding-bottom: 0; /* usuń dodatkowy dół */

  /* cofnięcie zmian dot. niskich ekranów */

  @media (max-width: 768px) {
    max-width: 400px;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Slider = styled(SliderComponent)`
  width: 960px;
  height: 768px;
  display: flex;
  gap: 100px;

  @media (max-width: 1280px) {
    width: 100%;
    height: auto;
    display: block; /* unslick -> blok */
  }

  /* cofnięcie zmian dot. niskich ekranów */

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    display: block;
  }
  .slick-track {
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }
`;

export const SlideImage = styled.img<{ width?: string }>`
  width: ${({ width }) => (width ? width : "768px")};
  height: auto;
  max-width: 100%;

  @media (max-width: 1280px) {
    width: calc(100% - 40px); /* 20px lewo i prawo */
    margin: 0 20px 20px; /* odstęp dolny między zdjęciami */
  }
  @media (max-width: 768px) {
    width: calc(100% - 40px);
    margin: 0 20px 20px;
  }
  @media (max-width: 480px) {
    width: calc(100% - 40px);
    margin: 0 20px 20px;
  }
`;

export const PaginationContainer = styled.ul`
  margin-top: 100px;
  margin-bottom: 0; /* usuń dodatkową przestrzeń na dole */
  padding: 0; /* reset domyślnego paddingu ul */
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  /* cofnięcie zmian dot. niskich ekranów */

  @media (max-width: 1280px) {
    display: none;
    margin: 0; /* gdy ukryte, nie rezerwuj miejsca */
    padding: 0;
  }
  @media (max-width: 768px) {
    display: none;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 480px) {
    display: none;
    margin: 0;
    padding: 0;
  }

  li {
    width: 50px;
    height: auto;
  }
`;
