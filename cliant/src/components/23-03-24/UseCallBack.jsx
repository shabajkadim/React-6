import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

const UseCallBack = () => {
    const [counter,setCounter]=useState(1)
    const [todos,setTodos]=useState([])
    // console.log("running counter");

    function Increment(){
        setCounter(counter + 1)
    }

    // function addTodo(){
    //     setTodos((t)=>[...t,"New Todo"])
    // }

    const addTodo=useCallback(()=>{
        setTodos((t)=>[...t,"New Todo"])
    },[todos])
  return (
    <>
      <h1>Use-Callback</h1>
      <ChildComponent todos={todos} addTodo={addTodo} />
      <hr/>
      <h3>Counter:{counter}</h3>
      <button onClick={Increment}>Increment</button>
    </>
  )
}

export default UseCallBack
