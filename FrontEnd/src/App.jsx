import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Profile from "./components/Profile";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <div className="container flex justify-center border items-center ">
      <Steps />
      </div> */}
    </>
  );
}

export default App;
