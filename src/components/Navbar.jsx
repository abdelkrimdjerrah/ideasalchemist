import React from "react";
// import {BsBook} from 'react-icons/bs'


const Navbar = () => {
  return (
    <React.Fragment>
      <section>
        <div className='bg-[#3F4F4FE] h-20 w-full flex items-center pl-10 space-x-4'>
            <div>
            {/* <BsBook className='text-white text-4xl'/> */}
            </div>

            <div>
            <p className='text-black text-3xl'>Nav</p>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
