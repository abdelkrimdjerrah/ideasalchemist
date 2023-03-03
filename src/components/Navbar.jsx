import React from "react";
import Input from "../shared/Input";
import Profile from "../shared/Profile";


const Navbar = () => {
  return (
    <React.Fragment>
      <section>
        <div className='bg-[#3F4F4FE] border-b border-gray-300 h-[100px] w-full flex items-center  justify-between '>
            <Input />
            <Profile />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
