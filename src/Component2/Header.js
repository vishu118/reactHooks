import React from 'react'
import './Header.css'
import { useState } from 'react';

const Header = ({search,setSearch,Data,setData}) => {
    const [Sort, setSort] = useState({ sorted: "name", reversed: false });
    const handleSort = ()=>{
        setSort({Sort:'name' , reversed : !Sort.reversed})
        const copy = [...Data]
        copy.sort((a,b)=>{
            if(Sort.reversed){
                return a.name.localeCompare(b.name)
            }
            return b.name.localeCompare(a.name)
        })
        setData(copy)
    }
  return (
    <div className='header'>
    <div className="head">
        <h1>Image Gallery</h1>
        <div className="searchField">
        <input
            type='text'
            placeholder='Search For Image ....'
            onChange = {(e)=>setSearch(e.target.value)}
            
         />
        </div>
        <div className="Button">
            <button className='btn' onClick = {handleSort} >Sort</button>
            <button className='btn' >View</button>
        </div>

    </div>

    </div>
  )
}

export default Header