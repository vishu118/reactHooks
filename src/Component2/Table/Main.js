import React from 'react'
import Dummy from "./Data.json"
import TableBody from './TableBody'
import Header from './Header'
import './Table.css'
import { useState } from 'react'


const Main = () => {
    const [ Data ,setData] = useState(Dummy)
    const [ NewContact , setNewContact] = useState({
        id : "",
        name : "",
        email : "",
        phone : "",

    })

const handleChange = (e)=>{
 const fieldName = e.target.getAttribute('name')
 const fieldValue = e.target.value;
 const newInput = {...NewContact}
 newInput[fieldName] = fieldValue
 setNewContact(newInput)
}

const handleAddInput = (e)=>{
 e.preventDefault();
 if (NewContact !== "" && NewContact.id !== ""  && NewContact.name !== "" && NewContact.email !== ""){ 
    const AddNew = {
        id : NewContact.id,
        name : NewContact.name,
        email: NewContact.email,
        phone : NewContact.phone
    }

    const  New = [...Data,AddNew]
    setData(New)
    setNewContact({
        id: "",
        name: "",
        email: "",
        phone: "",
 
})
}else{

    return
}

}


  return (
    <div className='container'>
        <Header  handleChange = {handleChange} handleAddInput = {handleAddInput} NewContact={NewContact}/>
        <TableBody Data = {Data} setData = {setData} />
    </div>
  )
}

export default Main