import React, { useContext } from 'react'
import { MyConterContext } from './context/ProviderCounterContext'
import { AuthContext } from './context/AuthContext'
import { ThemeContext } from './context/ThemeContext'


const Home = () => {
  const{counter,increment, decrement, reset}=useContext(MyConterContext)

   const{state,LOGOUT}=useContext(AuthContext)
   console.log(state);


  
  return (
    <div style={state}>
      <h1>welcome :{state?.username?.name}</h1> 
       <h1>Counter : {counter}</h1>

      <button onClick={()=>increment()}> increment</button>
       <button onClick={()=>decrement()}> decrement</button>
      <button onClick={()=>reset()}> reset</button> 
      <button onClick={()=>LOGOUT()}>LOGOUT</button>
      
      
      
    </div>
  )
}

export default Home
