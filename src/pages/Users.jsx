import React from 'react'
import Table from '../components/Table'
import Button from '../shared/Button'
const Users = () => {
  
  return (
    <React.Fragment>
    <section>
      <div className=" text-4xl h-screen">
        <div className='flex justify-between'>
          <Button title = "Ajouter" color = "bg-[#2367FF]"/>
          <div className='flex gap-5'>
            <Button title = "Modifier" color = "bg-white" />
            <Button title = "Supprimer" color = "bg-[#EF4135]"/>
          </div>
        </div>
        <Table />
      </div>
    </section>
  </React.Fragment>
  )
}

export default Users