import { useState } from "react";
import Logo from '../assets/arrositHorizontal.svg' 
import house from '../assets/house.svg' 
import RouteElement from "./RouteElement"


export default function Sidebar() {
  const [active, setActive] = useState("title1");
  function handleSubmit(e) {
    alert(e.target)
  }

  return (
    <div className='sidebar'>
        <div className="sidebar_elements">
            <div className="sidebar_logo">
                <img src={Logo} alt="" />
            </div>
            <div className="sidebar_router">
                <RouteElement Icon={house} Active={active === "title1"} Name="title1"/>
                <RouteElement Icon={house} Active={active === "title2"} Name="title2"/>
                <RouteElement Icon={house} Active={active === "title333333"} Name="title333333"/>
                <RouteElement Icon={house} Active={active === "title4"} Name="title4"/>
                <RouteElement Icon={house} Active={active === "title5"} Name="title5"/>
            </div>
        </div>
    </div>
  )
}
