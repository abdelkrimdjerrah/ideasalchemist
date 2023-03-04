import React from 'react'

export default function InputPw() {
  return (
    <div>
        <input
        className="border font-regular text-sm border-gray-300 rounded-md p-3 bg-transparent focus:border-[#2367FF] outline-none duration-300 ease-in-out "
        type="password"
        value="12345678"  
        placeholder='Search for anything ...'
      />
    </div>
  )
}