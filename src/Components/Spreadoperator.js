import React from 'react'

const Spreadoperator = () => {
    const [obj,setobj] = React.useState({
        myName:"vishal",age:24,degree:"Btech"
    })

    const handleClick = ()=>{
        setobj({...obj,  myName:"Kailash"})

        obj.myName == "Kailash"? setobj({...obj,  myName:"Vishal"}) : setobj({...obj,  myName:"Kailash"})
    }
  return (
    <div>
        <>
        <div className='continer'>
        <h1 >Name:{obj.myName} & Age : {obj.age} & Degree : {obj.degree}</h1>
          <button className='btn' onClick = {handleClick}>Click ME</button>
        </div>
        
        </>
    </div>
  )
}

export default Spreadoperator