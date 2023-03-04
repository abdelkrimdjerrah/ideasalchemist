import React from 'react'
import admin from '../assets/admin.svg'
import Input from '../shared/Input'
import InputPw from '../shared/InputPw'
import ButtonFull from '../shared/ButtonFull'


const Profile = () => {
  return (
    <React.Fragment>
      <div className='h-[100vh]'>
      <div className='absolute top-8 text-3xl font-semibold'>Profile</div>
     <section className='flex gap-11 justify-center'>
        <div className="flex flex-col justify-center items-center space-x-2 mt-6">
          {/* avatar */}
          <div className="overflow-hidden rounded-full  bg-gray-200">
            <img src={admin} alt="" className='h-[150px] w-[150px]'/>
          </div>

          <div className='align-center justify-center text-center pr-3 mt-2'>
            <p className="text-[25px]">Bachir Beleamri</p>
            <p className="text-[18px] text-gray-500">Farmer</p>
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-6 justify-center items-center'>
          <div className='flex flex-col gap-2'>
            <p className='text-sm'>Name:</p>
            <Input value="Bachir Beleamri" />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-sm'>Email:</p>
            <Input value="amiElBachir@gmail.com" />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-sm'>Phone:</p>
            <Input value="123456789" />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-sm'>Password:</p>
            <InputPw />
          </div>
          <div className='w-[300px]'>
            <ButtonFull title = "Save" color = "bg-[#2367FF]" />

          </div>
        </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Profile



