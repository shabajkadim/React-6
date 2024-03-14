import React, { useContext } from 'react'
import { MyConterContext } from './context/ProviderCounterContext'


const Home = () => {
  const{counter,increment, decrement, reset}=useContext(MyConterContext)

  return (
    <div>
      <h1>welcome</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={()=>increment()}> increment</button>
      <button onClick={()=>decrement()}> decrement</button>
      <button onClick={()=>reset()}> reset</button>
      
    </div>
  )
}

export default Home
