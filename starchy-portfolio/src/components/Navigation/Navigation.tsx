import { NAVIGATION_BUTTONS } from "./NavigationButton/Navigation.consts";
import NavigationButton from "./NavigationButton/NavigationButton";
const Navigation = () => {
  return (
    <div>
      {NAVIGATION_BUTTONS.map(({ content, route }, index) => {
        return <NavigationButton content={content} route={route} key={index} />;
      })}
    </div>
  );
};

export default Navigation;
