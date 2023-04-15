import React from 'react'
import './Header.css'

const Header = ({search,setSearch}) => {
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
            <button className='btn' >Sort</button>
            <button className='btn'>View</button>
        </div>

    </div>

    </div>
  )
}

export default Header