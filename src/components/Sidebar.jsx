import React from 'react'
import {SidebarData} from '../data/SidebarData'
import { NavLink } from "react-router-dom";
import arrositLogo from '../assets/arrositHorizontal.svg'

const Sidebar = () => {
    const activeLink = 'rounded-md hover:bg-[#F4F4FE] text-white mt-5 pl-7 w-full h-14 flex justify-start items-center text-xl font-medium bg-[#2367FF]'
    const normalLink = 'rounded-md hover:bg-[#F4F4FE] pl-7 mt-5 w-full h-14 flex justify-start items-center text-xl font-medium'

  return (
    <React.Fragment>
    <div className='w-[250px] mt-6 p-6'>
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
                          isActive ? activeLink: normalLink}
                        
                          >
                          {/* <span>{item.icon}</span> */}
                          <span>{item.title}</span>
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