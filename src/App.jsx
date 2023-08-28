import "./App.scss";
import CareerTab from "./components/CareerCards/CareerTab";
import WorkSpaceT from "./components/WorkSpace/FabiziWorkSpace";
import Header from "./components/Header/Header";
import FabiziCulture from "./components/FabiziCulture/FabiziCulture";
import Pekrs from "./components/PERKS/Pekrs";
import About from "./components/AboutCareerPage/About";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <FabiziCulture />
      <WorkSpaceT />
      <CareerTab />
      <Pekrs />
      <About />
      <Footer />
    </>
  );
}

export default App;
