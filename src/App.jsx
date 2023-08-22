import "./App.scss";
import CareerTab from "./components/CareerCards/CareerTab";
import WorkSpace from "./components/WorkSpace/FabiziWorkSpace";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <WorkSpace />
      <CareerTab />
    </>
  );
}

export default App;
