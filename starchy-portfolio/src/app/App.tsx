import { Route, Routes } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navigation from "../components/Navigation/Navigation";
import * as Styled from "./App.styled";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";
function App() {
  return (
    <Styled.AppContainer>
      <Styled.ContentContainer>
        <Navigation />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Styled.ContentContainer>
    </Styled.AppContainer>
  );
}

export default App;
