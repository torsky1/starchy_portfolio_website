import * as Styled from "./Logo.styled";
import LogoIMG from "/assets/starchy_gif.gif";
const Logo = () => {
  return (
    <Styled.LogoContainer>
      <Styled.LogoImage src={LogoIMG} alt="Logo" />
    </Styled.LogoContainer>
  );
};

export default Logo;
