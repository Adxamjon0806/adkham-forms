import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreateFrom from "../pages/CreateFrom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="new-form" element={<CreateFrom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
