import "./App.css";
import Section5 from "./Section5/Section5";
// import Accordion from "./components/Accordion/Accordion";
import HeroSection from "./components/HeroSections/HeroSection";
import Intro from "./components/Intro/Intro";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section6 from "./Section6/Section6.jsx";
import Section7 from "./Section7/Section7.jsx";
import Section8 from "./Section8/Section8.jsx";
import Footer from "./Footer/Footer.jsx";
function App() {
  return (
    <div className="App">
      <HeroSection />
      <Intro />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </div>
  );
}

export default App;