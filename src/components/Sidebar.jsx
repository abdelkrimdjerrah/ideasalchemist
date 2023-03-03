import React from 'react'
import { useState } from 'react';
import {SidebarData} from '../data/SidebarData'
import { NavLink } from "react-router-dom";
import arrositLogo from '../assets/arrositHorizontal.svg'

const Sidebar = () => {
    const activeLink = 'activatedLink rounded-md text-white mt-5 pl-7 w-full h-14 flex justify-start items-center text-xl font-medium bg-[#2367FF]'
    const normalLink = 'rounded-md hover:bg-[#F4F4FE] pl-7 mt-5 w-full h-14 flex justify-start items-center text-xl font-medium'
    const activeIcon = 'w-[22px]'
    const normalIcon = 'w-[28px]'

    const [state, setState] = useState("Statistics");
  return (
    <React.Fragment>
    <div className='w-[250px] p-6'>
        <div>
          <img src={arrositLogo} alt="" className='w-[150px]'/>
        </div>
        <div className="text-black mt-12">
            {
                SidebarData.map((item, index)=>{
                  
                  return(
                      <div key={index}>
                          <NavLink to={item.path}
                          className={({ isActive }) =>
                          isActive ? activeLink : normalLink}               
                          >
                            <img src={item.icon} alt="" className="w-[20px]" />
                            <span className='ml-[15px]'>{item.title}</span>
                          </NavLink>
                          
                      </div>
                  )
                })
            }
    
        </div>
    </div>
    
  </React.Fragment>
  )
}

export default Sidebar