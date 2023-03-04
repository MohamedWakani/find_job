import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Steps from "./components/Steps";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      {/* <div className="container flex justify-center border items-center ">
      <Steps />
      </div> */}
    </>
  );
}

export default App;
