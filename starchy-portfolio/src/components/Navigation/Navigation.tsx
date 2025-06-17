import { NAVIGATION_BUTTONS } from "./NavigationButton/Navigation.consts";
import NavigationButton from "./NavigationButton/NavigationButton";
import * as Styled from "./Navigation.styled";
import Logo from "./Logo/Logo";
const Navigation = () => {
  return (
    <Styled.NavigationContainer>
      <Logo />
      <Styled.NavigationButtonsContainer>
        {NAVIGATION_BUTTONS.map(({ content, route }, index) => {
          return (
            <NavigationButton content={content} route={route} key={index} />
          );
        })}
      </Styled.NavigationButtonsContainer>
    </Styled.NavigationContainer>
  );
};

export default Navigation;
