import React from "react";
import { Routes, Route } from "react-router-dom";
import Css from '../pages/Css'
import Git from '../pages/Git'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import Php from '../pages/Php'


const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/css" element={<Css />} />
        <Route path="/php" element={<Php />} />
        <Route path="/git" element={<Git />} />
        <Route path="/home" element={<Home />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
