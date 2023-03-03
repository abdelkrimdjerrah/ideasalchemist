import React from 'react'

export default function Table() {
    const columns = [
        {
          name:"Nom"
        },
        {
          name:"Prénom"
        },
        {
          name:"Email"
        },
        {
          name:"Telephone"
        },
        {
          name:"Privilège"
        },
        {
          name:"Accès"
        }
      ]
    
      const data = [
        {
          id : "1",
          nom : "Mrkim",
          prenom : "DDX",
          email : "aaaaa@gmail.com",
          telephone : "14353454",
          privilege : "admin",
          acces : "full",
        },
        {
          id : "2",
          nom : "Mrkim",
          prenom : "DDX",
          email : "aaaaa@gmail.com",
          telephone : "14353454",
          privilege : "admin",
          acces : "full",
        },
        {
          id : "3",
          nom : "Mrkim",
          prenom : "DDX",
          email : "aaaaa@gmail.com",
          telephone : "14353454",
          privilege : "admin",
          acces : "full",
        },
        {
          id : "4",
          nom : "Mrkim",
          prenom : "DDX",
          email : "aaaaa@gmail.com",
          telephone : "14353454",
          privilege : "admin",
          acces : "full",
        },
        {
          id : "5",
          nom : "Mrkim",
          prenom : "DDX",
          email : "aaaaa@gmail.com",
          telephone : "14353454",
          privilege : "admin",
          acces : "full",
        },
        {
          id : "6",
          nom : "Mrkim",
          prenom : "DDX",
          email : "aaaaa@gmail.com",
          telephone : "14353454",
          privilege : "admin",
          acces : "full",
        },
        {
          id : "7",
          nom : "Mrkim",
          prenom : "DDX",
          email : "aaaaa@gmail.com",
          telephone : "14353454",
          privilege : "admin",
          acces : "full",
        },
      ]

  return (
    <div>
        <div className="mt-6">
	<h1 className="text-lg  font-medium">Users : </h1>
	<div className="flex flex-col mt-6">
		<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div className="border border-gray-300 overflow-hidden sm:rounded-lg">
					<table className="min-w-full text-sm ">
						<thead className=" text-xs uppercase font-medium text-white bg-[#151223]">
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
