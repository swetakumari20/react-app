import React from "react";
import './App.css'
import Signup from './Pages/Auth/ Signup'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Home/Home";
import ForgotPassword from "./Pages/Auth/ForgotPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
