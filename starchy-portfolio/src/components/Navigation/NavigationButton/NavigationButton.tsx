import { useNavigate, useLocation } from "react-router-dom";
import * as Styled from "./NavigationButton.styled";
import PortfolioDropdown from "../PortfolioDropdown";

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

  // special-case portfolio: show dropdown via CSS :hover; label not clickable
  if (content.toLowerCase() === "portfolio") {
  return <PortfolioDropdown label={content} isActive={isActive} />;
  }

  return (
    <Styled.NavButton onClick={navigateTo} $isActive={isActive}>
      {content}
    </Styled.NavButton>
  );
};

export default NavigationButton;
