import "./App.scss";
import CareerTab from "./components/CareerCards/CareerTab";
import WorkSpaceT from "./components/WorkSpace/FabiziWorkSpaceT";
import Header from "./components/Header/Header";
// import FabiziCulture from "./components/FabiziCulture/FabiziCulture";
import About from "./components/AboutCareerPage/About";
function App() {
  return (
    <>
      <Header />
      {/* <FabiziCulture/> */}
      <WorkSpaceT />
      <CareerTab />
      <About />
    </>
  );
}

export default App;
