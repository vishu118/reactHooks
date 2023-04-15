import React from 'react'




const TableBody = ({Data,setData}) => {
   
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
              {Data.map((ele)=>{
                return(
                    <tr key = {ele.id}>
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