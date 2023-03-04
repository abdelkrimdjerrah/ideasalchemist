import React from 'react'

export default function TableUsers() {
    const columns = [
        {
          name:"First name"
        },
        {
          name:"Last name"
        },
        {
          name:"Email"
        },
        {
          name:"Phone"
        },
        {
          name:"Privilege"
        },
        {
          name:"Access"
        }
      ]
    
      const data = [
        {"id":"1","nom":"Mollis","prenom":"Phasellus","email":"phasellus.mollis@dictum.net","telephone":"1-850-526-1258","privilege":"admin","acces":"all"},
{"id":"1","nom":"Curabitur","prenom":"Pellentesque","email":"pellentesque@vulputatevelit.edu","telephone":"1-606-962-2244","privilege":"admin","acces":"all"},
{"id":"1","nom":"Velit","prenom":"Nunc","email":"nunc.velit@ipsumprimis.org","telephone":"1-302-347-8286","privilege":"admin","acces":"all"},
{"id":"1","nom":"Venenatis","prenom":"Proin","email":"proin.venenatis@laciniaSed.net","telephone":"1-352-452-6174","privilege":"farmer","acces":"Limited"},
{"id":"1","nom":"Ipsum","prenom":"Lacus","email":"lacus.ipsum@mauris.co.uk","telephone":"1-716-955-7382","privilege":"farmer","acces":"Limited"},
{"id":"1","nom":"Nisi","prenom":"Aenean","email":"aenean.nisi@tristiquesenectus.ca","telephone":"1-651-467-8912","privilege":"farmer","acces":"Limited"},
{"id":"1","nom":"Fringilla","prenom":"Lobortis","email":"lobortis.fringilla@metus.net","telephone":"1-563-619-2537","privilege":"farmer","acces":"Limited"},
{"id":"1","nom":"Eros","prenom":"Suspendisse","email":"suspendisse.eros@viverra.net","telephone":"1-571-929-7446","privilege":"farmer","acces":"Limited"},
{"id":"1","nom":"Elit","prenom":"Aliquet","email":"aliquet.elit@faucibus.net","telephone":"1-415-812-5683","privilege":"farmer","acces":"Limited"},
{"id":"1","nom":"Tristique","prenom":"Vivamus","email":"vivamus.tristique@necanteMaecenas.org","telephone":"1-310-871-6152","privilege":"farmer","acces":"Limited"}
      ]
      return (
        <div className='w-full'>
            <div className="mt-6">
        <div className="flex flex-col mt-6">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className=" overflow-hidden sm:rounded-lg">
                        <table className="min-w-full text-sm bg-white">
                            <thead className="text-xs uppercase font-medium text-white bg-[#151223]">
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
                                            <td key={rowID} className="px-6 py-4 whitespace-nowrap"> {e.nom} </td>
                                            <td key={rowID} className="px-6 py-4 whitespace-nowrap"> {e.prenom} </td>
                                            <td key={rowID} className="px-6 py-4 whitespace-nowrap"> {e.email} </td>
                                            <td key={rowID} className="px-6 py-4 whitespace-nowrap"> {e.telephone} </td>
                                            <td key={rowID} className="px-6 py-4 whitespace-nowrap"> {e.privilege} </td>
                                            <td key={rowID} className="px-6 py-4 whitespace-nowrap"> {e.acces} </td>
    
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
