import React, { useContext, useState } from 'react'
import './../Style/login.css'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from './context/AuthContext';

const Login = () => {

 const{LOGIN}=useContext(AuthContext)
 console.log(LOGIN);

  const[loginData,setLoginData]=useState({email:"",password:""})
  // console.log(loginData);

  const router=useNavigate()

  function handleChange(e){
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }

 async function handleSubmit(e){
    e.preventDefault()
    if(loginData.email && loginData.password){
      try{
        const response={data:{success:true,massage:"Login successful", token:"skhgfkahsdfgkhrfghrf", userData:{name:"Shabaj",email:"shabaj@123"}}}
        if(response.data.success===true){
          localStorage.setItem("token",JSON.stringify(response.data.token))
          LOGIN(response.data.userData)
          toast.success(response.data.massage)
          setLoginData({email:"",password:""})
          router('/')
        }
      }catch(error){
        toast.error(error)
      }
    }else{
      toast.error("all feild are required")
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
