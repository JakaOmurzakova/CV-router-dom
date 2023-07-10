import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyProject from "../pages/MyProject";
import ContactMe from "../pages/ContactMe";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project" element={<MyProject />} />
      <Route path="/contact" element={<ContactMe />} />
    </Routes>
  );
};

export default MainRoutes;
