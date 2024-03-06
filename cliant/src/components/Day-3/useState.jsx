import React, { useState } from 'react'

const Counter = () => {
  const [counter,setCounter]=useState(1)

  const [price,setPrice]=useState(1000)

  function increment(){
    setCounter((value)=>value+1)
    setPrice((prevelue=>prevelue+1000))
  }
  function decrement(){
    if(counter > 0){
      setCounter((value)=>value-1)
      setPrice((prevelue=>prevelue-1000))
    }
  }

  function reset(){
    setCounter(0)
    setPrice(1000)
  }
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <h1>Price:{price}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter


