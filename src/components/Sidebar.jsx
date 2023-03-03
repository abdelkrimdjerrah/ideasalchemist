import React from 'react'
import {SidebarData} from '../data/SidebarData'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const activeLink = 'hover:bg-[#F4F4FE] text-white mt-7 pl-7 w-full h-14 flex justify-start items-center text-2xl space-x-1 font-bold bg-[#2367FF]'
    const normalLink = 'hover:bg-[#F4F4FE] pl-7 mt-7 w-full h-14 flex justify-start items-center text-2xl space-x-1 font-bold'

  return (
    <React.Fragment>
    <section>
      <div className="text-black">
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
    </section>
  </React.Fragment>
  )
}

export default Sidebar