import { useNavigate, useLocation } from "react-router-dom";
import * as Styled from "./NavigationButton.styled";
type NavigationButtonProps = {
  content: string;
  route: string;
};

const NavigationButton = ({ content, route }: NavigationButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === route;

  const navigateTo = () => {
    if (route === "/instagram") {
      window.open("https://www.instagram.com/_starchy/", "_blank");
    } else {
      navigate(route);
    }
  };

  return (
    <Styled.NavButton onClick={navigateTo} $isActive={isActive}>
      {content}
    </Styled.NavButton>
  );
};

export default NavigationButton;
