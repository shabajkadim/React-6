import React, { useState } from 'react'
import './../Style/register.css'
import { Router, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const Register = () => {
  const[userData,setUserData]=useState({name:"",email:"",password:"",confirmPassword:""})
  const router=useNavigate()
  console.log(userData);

  function handleChange(e){
    setUserData({...userData,[e.target.name]:e.target.value})
  }


 async function handleSubmit(e){
  e.preventDefault()
    if(userData.name && userData.email && userData.password && userData.confirmPassword){
      if(userData.password === userData.confirmPassword){
        try{
          const response=await axios.post("http://localhost:8000/api/v1/auth/register",{userData})
          // const response={data:{success:true,massage:"Register Successful"}}
          if(response.data.success=== true){
            toast.success(response.data.message)
            setUserData({name:"",email:"",password:"",confirmPassword:""})
            localStorage.setItem("data",JSON.stringify(response.data))
            router('/login')
          }
        }catch(error){
          alert("error")
        }
      }else{
        toast.error("passworrd and confirmpassword not match")
      }
    }else{
      alert("All fields are required")
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
