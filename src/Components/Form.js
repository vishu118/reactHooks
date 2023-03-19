import React,{useState} from 'react'
import "./CSS/Form.css";

const Form = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const handleSubmit= ()=>{

    }
  return (
    <>
    <div className='formSection'>
    <label htmlFor="email">Email </label>
        <input type="email" placeholder = "Enter Your Email" name='email' id='email' autoComplete='off' value={Email}/><br/>
     <label htmlFor="password">Password </label>   
        <input type="password" placeholder = "Enter Your Password" name='password' id='password'  autoComplete='off'  value={Password}/>
        <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
    </div>
   

    </>
  )
}

export default Form