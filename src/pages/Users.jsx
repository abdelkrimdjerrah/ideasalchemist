import React from 'react'
import TableUsers from '../components/TableUsers'
import Button from '../shared/Button'
const Users = () => {


  
  return (

    
    <React.Fragment>
    <div className='absolute top-8 text-3xl font-semibold'>Users</div>
    <section>
      <div className=" text-4xl h-screen">
        <div className='flex justify-between'>
          <Button title = "Add" color = "bg-[#2367FF]" />
          <div className='flex gap-5'>
            <Button title = "Modify" color = "bg-white" />
            <Button title = "Delete" color = "bg-[#EF4135]"/>
          </div>
        </div>
        <TableUsers />
      </div>
    </section>
  </React.Fragment>
  )
}

export default Users