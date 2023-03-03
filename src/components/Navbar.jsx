import React from "react";
import Input from "../shared/Input";
import Personalinfo from "../shared/Personalinfo";
import Waterlevel from '../assets/waterlevel.svg'

const Navbar = () => {
  return (
    <React.Fragment>
      <section>
        <div className='bg-[#3F4F4FE] border-b border-gray-300 h-[100px] w-full flex items-center  justify-end gap-[60px] '>
            <img src={Waterlevel} alt="" className=" h-[45px]"/>
            <Personalinfo />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
