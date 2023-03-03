import React from 'react'
import mapComponent from '../assets/mapComponent.svg'
import zones from '../assets/zones.svg'
const Map = () => {
  return (
  <React.Fragment>
    <div className='h-[100vh]'>
      <div className='absolute top-8 text-3xl font-semibold'>Map</div>
      <section>
        <div className='flex justify-center mt-6 gap-6'>
          <img src={mapComponent} alt="" />
          <img src={zones} alt="" />
        </div>
      </section>
    </div>
  </React.Fragment>


  )
}

export default Map