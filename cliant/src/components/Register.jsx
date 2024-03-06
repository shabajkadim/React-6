import React, { useState } from 'react'
import './../Style/register.css'
import { Router, useNavigate } from 'react-router-dom'

const Register = () => {
  const[userData,setUserData]=useState({name:"",email:"",password:"",confirmPassword:""})
  const router=useNavigate()

  console.log(userData,"userData");
  function handleChange(e){
    console.log(e.target.name,e.target.value);
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    if(userData.name && userData.email && userData.password && userData.confirmPassword){
      if(userData.password === userData.confirmPassword){
        alert("register Successful")
      setUserData({name:"",email:"",password:"",confirmPassword:""})
      router('/login')
      }else{
        alert("check Password and confirmPassword")
      }
      
    }else{
      alert("all Filds are required")
    }
  }
  return (
    <div className='maindiv'>
      <h1>Register-page</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br/>
        <input type='text' required onChange={handleChange} name='name' value={userData.name} /><br/>
        <label>Email:</label><br/>
        <input type='email' required onChange={handleChange} name='email' value={userData.email} /><br/>
        <label>Password:</label><br/>
        <input type='password' required onChange={handleChange} name='password' value={userData.password} /><br/>
        <label>ConfrimPassword:</label><br/>
        <input type='password' required onChange={handleChange} name='confirmPassword' value={userData.confirmPassword} /><br/>
        <input type='submit' value="register" />
      </form>
    </div>
  )
}

export default Register
