import React from "react";
import { Routes, Route } from "react-router-dom";
import Map from '../pages/Map'
import Layout from '../pages/Layout'
import Statistics from '../pages/Statistics'
import Users from '../pages/Users'
import Profile from '../pages/Profile'


const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/" element={<Statistics />} />
        <Route path="/users" element={<Users />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
