import React from 'react'

export default function TableInsights() {
    
  const columns = [
    {
      name:"Zone name"
    },
    {
      name:"Size"
    },
    {
      name:"Plant"
    },
    {
      name:"Water cons"
    }
  ]

  const data = [
    {
      id : "1",
      zone : "A",
      size : "900m²",
      plant : "Potato",
      watercons : "550 L",
    },
    {
      id : "2",
      zone : "B",
      size : "500m²",
      plant : "Wheat",
      watercons : "323 L",
    },
    {
      id : "3",
      zone : "C",
      size : "850m²",
      plant : "Sunflowers",
      watercons : "403 L",
    },
    {
      id : "4",
      zone : "D",
      size : "956m²",
      plant : "Roses",
      watercons : "703 L",
    },
    {
      id : "5",
      zone : "E",
      size : "350m²",
      plant : "Lavender",
      watercons : "464L",
    }
  ]
      return (
        <div className='w-full'>
            <div className="mt-6">
        <div className="flex flex-col mt-6">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className=" overflow-hidden sm:rounded-lg">
                        <table className="min-w-full text-sm bg-white">
                            <thead className="text-xs uppercase font-medium text-white bg-[#2367FF]">
                                <tr>
                                <th scope="col" className="px-6 py-3 text-left tracking-wider"> <input type="checkbox" /> </th>
                                      {columns.map((e, rowID) =>(
                                            <th key={rowID} scope="col" className="px-6 py-3 text-left tracking-wider">{e.name}</th>
    
                                            
                                            ))}		
                                </tr>
                                
                            </thead>
                            <tbody className="">
                        
                                     {data.map((e, rowID) =>(
                                        <tr className="border-b border-gray-300">
                                            <td key={rowID} className="px-6 py-4 whitespace-nowrap"> <input type="checkbox" /> </td>
                                            <td key={rowID} className="px-6 py-4 whitespace-nowrap"> {e.zone} </td>
                                            <td key={rowID} className="px-6 py-4 whitespace-nowrap"> {e.size} </td>
                                            <td key={rowID} className="px-6 py-4 whitespace-nowrap"> {e.plant} </td>
                                            <td key={rowID} className="px-6 py-4 whitespace-nowrap"> {e.watercons} </td>
    
                                        </tr>
                                        
                                        ))}		
                                                
                                        
                                
                                    
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
        </div>
      )
}
