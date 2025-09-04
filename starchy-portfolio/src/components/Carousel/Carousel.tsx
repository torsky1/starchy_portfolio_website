import * as Styled from "./Carousel.styles";
import { carouselPaths } from "./carouselPaths";
const Carousel = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    appendDots: (dots: React.ReactNode) => (
      <Styled.PaginationContainer>{dots}</Styled.PaginationContainer>
    ),
    customPaging: (i: number) => {
      return (
        <Styled.SlideImage
          width="50px"
          src={carouselPaths[i]}
          loading="lazy"
          decoding="async"
        />
      );
    },
    responsive: [
      // tak jak na telefonach: obrazy pod sobą również do 1280px
      { breakpoint: 1280, settings: "unslick" },
      { breakpoint: 768, settings: "unslick" },
      { breakpoint: 480, settings: "unslick" },
    ],
  };

  return (
    <Styled.CarouselContainer>
      <Styled.Slider {...settings}>
        {carouselPaths.map((path, index) => (
          <div key={index}>
            <Styled.SlideImage src={path} alt={`Carousel slide ${index + 1}`} />
          </div>
        ))}
      </Styled.Slider>
    </Styled.CarouselContainer>
  );
};

export default Carousel;
