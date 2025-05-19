import { useNavigate } from "react-router-dom";
type NavigationButtonProps = {
  content: string;
  route: string;
};

const NavigationButton = ({ content, route }: NavigationButtonProps) => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(route)}>{content}</button>;
};

export default NavigationButton;
