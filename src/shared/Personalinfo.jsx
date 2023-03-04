import React from 'react'
import admin from '../assets/admin.svg'
export default function Personalinfo() {
  return (
    <div className="flex items-center space-x-2">
      {/* avatar */}
      <div className="overflow-hidden rounded-full h-[50px] w-[50px] bg-gray-200">
        <img src={admin} alt="" />
      </div>

      <div>
        <p className="text-[16px]">Mr. Beleamri</p>
        <p className="text-[12px] text-gray-500">Admin</p>
      </div>
    </div>
  )
}
