import React, { useState } from 'react'
import './../Style/login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const[loginData,setLoginData]=useState({email:"",password:""})
  console.log(loginData);

  const router=useNavigate()

  function handleChange(e){
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    if(loginData.email && loginData.password){
      alert("login SuccessFull")
      setLoginData({email:"",password:""})
      router('/')
    }else{
      alert("all feild are required")
    }
  }

  return (
    <div className='maindivv'>
      <h1>Login-page</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label><br/>
        <input type='email' onChange={handleChange} name='email' value={loginData.email} /><br/>
        <label>Password</label><br/>
        <input type='password' onChange={handleChange} name='password' value={loginData.password} /><br/>
        <input type='submit' value="Login"/>
      </form>
    </div>
  )
}

export default Login
