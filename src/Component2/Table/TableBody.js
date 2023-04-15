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

    const handleSortId = ()=>{
     
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
    const handleSortbyName = ()=>{
     
       setSort({Sort : "name" , reversed : !Sort.reversed})
       const Copy = [...Data]
       Copy.sort((a,b)=>{
        if (Sort.reversed){
         return a.name.localeCompare(b.name)
        }
        return  b.name.localeCompare(a.name)
       })
       setData(Copy)
    }  

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th onClick = {handleSortId}>ID</th>
                    <th onClick ={handleSortbyName}>Name</th>
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