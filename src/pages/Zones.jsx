import React from 'react'
import zoneA from '../assets/zoneA.svg'
import zoneB from '../assets/zoneB.svg'
import zoneC from '../assets/zoneC.svg'
import waterneeded from '../assets/waterneeded.svg'
import soilmoisture from '../assets/soilmoisture.svg'
import soil from '../assets/soil.svg'
import mapzoneA from '../assets/mapzoneA.svg'
import lastspray from '../assets/lastspray.svg'
import nextspray from '../assets/nextspray.svg'
const Zones = () => {
  return (
    <React.Fragment>
      <div className='h-[100vh]'>
        <div className='absolute top-8 text-3xl font-semibold'>Zones</div>
        <div className='flex gap-6 mt-6'>
        <div className='flex flex-col gap-6 w-1/4 '>
          <img src={zoneA} alt="" className=''/>
          <img src={zoneB} alt="" className=''/>
          <img src={zoneC} alt="" className=''/>
        </div>
        <div className='bg-white p-6 w-3/4 flex justify-between'>
            <div className='flex flex-col gap-6 text-lg'>
              <div className='flex gap-4'>
                <div className='font-semibold'>Name: </div>
                <span>Zone A</span>
              </div>   
              <div className='flex gap-4'>
                <div className='font-semibold'>Size: </div>
                <span>900 m²</span>
              </div> 
              <div className='flex gap-4'>
                <div className='font-semibold'>Crop: </div>
                <span>Potatoes</span>
              </div> 
              <div className='flex gap-4'>
                <div className='font-semibold'>Water consumption: </div>
                <span>322 L</span>
              </div> 
              <div className='flex gap-6 w-[130px]'>
                  <img src={waterneeded} alt="" />
                  <img src={soilmoisture} alt="" />
              </div>  
              <div className='flex flex-col gap-4'>
                <div className='font-semibold'>Last spray: </div>
                <img src={lastspray} alt="" className='w-3/4' />
              </div>
              <div className='flex flex-col gap-4'>
                <div className='font-semibold'>Estimated next spray: </div>
                <img src={nextspray} alt="" className='w-3/4' />
              </div>      
            </div>
            <div className='w-2/5'>
              <img src={mapzoneA} alt="" />
              <img src={soil} alt="" />
            </div>
        </div>
      </div>
      </div>
     
   </React.Fragment>
  )
}

export default Zones