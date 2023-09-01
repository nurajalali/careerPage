import "./App.scss";
import JoinFabiziSections from "./components/SectionFour/JoinFabiziSections";
import FabiziWorkSpace from "./components/SectionThree/FabiziWorkSpace";
import Header from "./components/Header/Header";
import FabiziCulture from "./components/SectionTwo/FabiziCulture";
import FabiziPerksAndBenefits from "./components/SectionFive/FabiziPerksAndBenefits";
import AboutFabizi from "./components/SectionSix/AboutFabizi";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <FabiziCulture />
      <FabiziWorkSpace />
      <JoinFabiziSections />
      <FabiziPerksAndBenefits />
      <AboutFabizi />
      <Footer />
    </>
  );
}

export default App;
