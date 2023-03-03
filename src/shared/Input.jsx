import React from 'react'

export default function Input() {
  return (
    <div>
        <input
        className="border font-regular text-sm border-gray-300 rounded-xl p-3 bg-transparent focus:border-[#2367FF] outline-none duration-300 ease-in-out "
        type="text"
        placeholder='Search for anything ...'
      />
    </div>
  )
}
