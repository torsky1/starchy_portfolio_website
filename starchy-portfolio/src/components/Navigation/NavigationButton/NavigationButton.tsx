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
  return (
    <Styled.NavButton onClick={() => navigate(route)} $isActive={isActive}>
      {content}
    </Styled.NavButton>
  );
};

export default NavigationButton;
