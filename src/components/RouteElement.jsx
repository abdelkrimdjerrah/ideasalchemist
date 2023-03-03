import React from 'react'

export default function RouteElement(props) {
  return (
    <div className='route'>
        <div className={props.Active ? "route_elements active" : "route_elements"}>
          <div className="route_icon">
              <img src={props.Icon} alt="" />
          </div>
          <div className="route_name">
              <p> {props.Name} </p>
          </div>
        </div>
    </div>
  )
}
