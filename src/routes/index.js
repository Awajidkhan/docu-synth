import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "../container/SignUpPage";
import LoginPage from "../container/LoginPage";
import HomePage from "../container/HomePage";
import About from "../container/About";
import Solution from "../container/Solution";

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/solution" element={<Solution />} />
      <Route path="/log-in" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
};

export default RoutesPages;