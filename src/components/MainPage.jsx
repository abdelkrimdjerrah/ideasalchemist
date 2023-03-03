import React from "react";
import Navbar from "./Navbar";
import NavPage from "./NavPage";
import Sidebar from './Sidebar'

const MainPage = () => {
  return (
    <React.Fragment>
      <div className="flex">
          <div className=''>
                <Sidebar/>
            </div>
          <div className="bg-[#F4F4FE] w-full pr-8 pl-8 ">
            <Navbar />
            <NavPage/>
          </div>

      </div>
    </React.Fragment>
  );
};

export default MainPage;
