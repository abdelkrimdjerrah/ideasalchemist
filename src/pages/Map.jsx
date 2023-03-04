import React from 'react'
import mapComponent from '../assets/mapComponent.svg'
import zones from '../assets/zones.svg'
import ZonesDistrubution from '../components/ZonesDistrubution'
const Map = () => {
  return (
  <React.Fragment>
    <div className='h-[100vh]'>
      <div className='absolute top-8 text-3xl font-semibold'>Map</div>
      <section>
        <div className='flex justify-center mt-6 gap-6'>
          <div className='w-3/4 bg-white p-14 rounded-2xl'>
             <img src={mapComponent} alt="" draggable="false" />
          </div>
          <ZonesDistrubution widthFull/>
        </div>
      </section>
    </div>
  </React.Fragment>


  )
}

export default Map