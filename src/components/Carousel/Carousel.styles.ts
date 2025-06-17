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
`;

export const Slider = styled(SliderComponent)`
  width: 960px;
  height: 768px;
  display: flex;
  gap: 100px;
  .slick-track {
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 50px;
  }
`;

export const SlideImage = styled.img<{ width?: string }>`
  width: ${({ width }) => (width ? width : "768px")};
  height: auto;
`;

export const PaginationContainer = styled.ul`
  margin-top: 100px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  li {
    width: 50px;
    height: auto;
  }
`;
