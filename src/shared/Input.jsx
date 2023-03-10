import React from 'react'

export default function Input(props) {
  return (
    <div>
        <input
        className="border font-regular text-sm border-gray-300 rounded-md p-3 bg-transparent focus:border-[#2367FF] outline-none duration-300 ease-in-out "
        type="text"
        name="fname" value={props.value}
        placeholder='Search for anything ...'
      />
    </div>
  )
}
