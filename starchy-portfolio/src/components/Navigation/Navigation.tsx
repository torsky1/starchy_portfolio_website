import { NAVIGATION_BUTTONS } from "./NavigationButton/Navigation.consts";
import NavigationButton from "./NavigationButton/NavigationButton";
import * as Styled from "./Navigation.styled";
const Navigation = () => {
  return (
    <Styled.NavigationContainer>
      {NAVIGATION_BUTTONS.map(({ content, route }, index) => {
        return <NavigationButton content={content} route={route} key={index} />;
      })}
    </Styled.NavigationContainer>
  );
};

export default Navigation;
