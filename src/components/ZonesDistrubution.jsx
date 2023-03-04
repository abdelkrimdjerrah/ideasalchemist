import React from 'react'
import ButtonFull from '../shared/ButtonFull'

export default function ZonesDistrubution(props) {

    const zones = [
        {
            id : "1",
            name : "A",
            plant : "Potato"
        },
        {
            id : "2",
            name : "B",
            plant : "Wheat"
        },
        {
            id : "3",
            name : "C",
            plant : "Sunflowers"
        },
        {
            id : "4",
            name : "D",
            plant : "Roses"
        },
        {
            id : "5",
            name : " D",
            plant : "Lavender"
        }
    ]
   
  return (
    <div className='w-1/4'>
        <div className='bg-white rounded-2xl h-fit'>
            <div className=' w-full rounded-t-2xl bg-[#2367FF] '>
                <div className='p-5 text-white font-semibold'>
                    Zones distribution
                </div>
            </div>
                <div className='ml-5 mb-5 mr-5 pb-5'>
                    {zones.map((e, rowID) =>(
                        <div key={rowID} className='flex gap-2 items-center mt-5'>
                            <div className='h-2 w-2 bg-black rounded-full'></div>
                            <div className='font-semibold'>{e.name} :</div>
                            <div>{e.plant}</div>
                        </div>
                    ))}		
                </div>
            
        </div>
        <div>
            <ButtonFull title = "Add a zone" color = "bg-[#2367FF]" />
        </div>                    
    </div>
  )
}
