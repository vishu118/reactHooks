import React from 'react'
import { useState } from 'react'




const TableBody = ({Data,setData}) => {
    const [ Sort , setSort ] = useState({id : "id", reversed : false})
   

    const handleDelete = (id)=>{
        const deleteContact = Data.filter((ele)=>
          ele.id !== id
        )
        setData(deleteContact)
      }  

    const handleSort = ()=>{
        console.log('hi')
       setSort({Sort : "id" , reversed : !Sort.reversed})
       const Copy = [...Data]
       Copy.sort((a,b)=>{
        if (Sort.reversed){
         return a.id - b.id
        }
        return b.id - a.id
       })
       setData(Copy)
    }  

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th onClick = {handleSort}>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {Data.map((ele)=>{
                return(
                    <tr key = {ele.id} >
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.phone}</td>
                    <td>
              
              <div className='button'>
              <button className='Action-btn' onClick = {(e)=>handleDelete(ele.id)}>Delete</button>
              <button className='Action-btn' >Edit</button>
              </div>
              </td>

                </tr>
                )
              })

              }
            </tbody>
        </table>
    </div>
  )
}

export default TableBody