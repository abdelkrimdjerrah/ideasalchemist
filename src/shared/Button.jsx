import React from 'react'

export default function Button(props) {
  const isActive = "text-white"
  const isNormal = "text-[#151223]"
    
  return (
    <div className={"cursor-pointer rounded-md mt-5 pl-7 pr-7 w-fit h-14 flex justify-start items-center text-xl font-medium " + props.color} >
        <span className={props.color === "bg-white" ? isNormal : isActive}>{props.title}</span>
    </div>
  )
}
