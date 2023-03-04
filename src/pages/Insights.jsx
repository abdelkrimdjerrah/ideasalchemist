import React from 'react'
import TableInsights from '../components/TableInsights'
import plotuse from '../assets/ploteuse.svg'
import cropsplanted from '../assets/cropsplanted.svg'
import recommendedcrop from '../assets/recommendedcrop.svg'
const Insights = () => {
  
  return (
    <React.Fragment>
    <div className='absolute top-8 text-3xl font-semibold'>Insights</div>
    <section>
    <div className=" text-4xl h-screen">
      <img src={plotuse} className='mt-6 w-full' draggable="false" />
      <div className='flex gap-6 justify-between w-full'>
          <TableInsights />
          <div className='flex flex-col gap-6 mt-6'>
            <img src={cropsplanted} className='h-[80%]' draggable="false"/>
            <img src={recommendedcrop} className='h-[80%]' draggable="false"/>
          </div>
      </div>
    </div>
  </section>
  </React.Fragment>


  )
}

export default Insights