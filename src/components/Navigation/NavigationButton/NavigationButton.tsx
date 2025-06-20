import { useNavigate, useLocation } from "react-router-dom";
import * as Styled from "./NavigationButton.styled";
import axios from "axios";
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
      axios
        .post(
          "http://localhost/instagram_click.php",
          new URLSearchParams({ target: "instagram" }).toString(),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .catch((error: Error) => {
          console.error("Tracking error:", error);
        });

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
