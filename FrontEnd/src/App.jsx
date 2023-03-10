import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import AuthLayouts from "./components/layouts/AuthLayouts";
import Gest from "./components/layouts/Gest";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route element={<AuthLayouts />}>
       
        <Route path="/profile" element={<Profile />} />
        </Route>
       
        <Route element={<Gest />} >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      {/* <div className="container flex justify-center border items-center ">
      <Steps />
      </div> */}
    </>
  );
}

export default App;
