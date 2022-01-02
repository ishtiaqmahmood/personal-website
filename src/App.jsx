import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Skill from "./components/skill/skill";
import Service from "./components/service/service";
import SocialFollow from "./components/socialFollow/socialFollow";
import Footer from "./components/footer/footer"
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Skill />
      <Service />
      <ProductList />
      <Contact />
      <SocialFollow />
      <Footer />
    </div>
  );
};

export default App;
