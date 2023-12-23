import React, { createContext, useState } from "react";
import SignupPage from "./components/SignupPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SigninPage from "./components/SigninPage";
import Forget from "./components/Forget";
import Reset from "./components/Reset";
import ResetSucess from "./components/ResetSucess";
import Home from "./components/Home";
import Bookings from "./components/Bookings";

const userContext = createContext();

function App() {
  const [register, setRegister] = useState({
    username: "",
    name: "",
    mobile: "",
    address: "",
    password: "",
    token: "",
  });
  return (
    <userContext.Provider value={{ register, setRegister }}>
      <Router>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/Signin" element={<SigninPage />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/ResetSucess" element={<ResetSucess />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Bookings" element={<Bookings />} />
        </Routes>
      </Router>
    </userContext.Provider>
  );
}

export { App as default, userContext };
