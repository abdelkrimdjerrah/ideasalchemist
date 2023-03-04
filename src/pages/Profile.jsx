import React from 'react'
import Personalinfo from "../shared/Personalinfo";

const Profile = () => {
  return (
    <React.Fragment>
      <div className='h-[100vh]'>
        <div className='absolute top-8 text-3xl font-semibold'>Profile</div>
        <section>
        <Personalinfo />
        </section>
      </div>
    </React.Fragment>
  )
}

export default Profile