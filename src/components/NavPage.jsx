import React from "react";
import { Routes, Route } from "react-router-dom";
import Map from '../pages/Map'
import Zones from '../pages/Zones'
import Insights from '../pages/Insights'
import Users from '../pages/Users'
import Profile from '../pages/Profile'


const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/" element={<Insights />} />
        <Route path="/users" element={<Users />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/zones" element={<Zones />} />
        <Route path="/insights" element={<Insights />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
