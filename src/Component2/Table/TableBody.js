import React from 'react'
import Dummy from "./Data.json"
import { useState } from 'react'


const TableBody = () => {
    const [ Data ,setData] = useState(Dummy)
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {Data.map((ele,index)=>{
                return(
                    <tr key = {index}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.phone}</td>
                    <td>
              
              <div className='button'>
              <button className='Action-btn' >Delete</button>
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