import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [counter,setCounter]=useState(1)
    const [todos,setTodos]=useState([])

    function AddTodo(){
        setTodos([...todos,"New Todo"])
    }

    // const lenthyCalculation=ExpensiveCalculation(counter)

    const lenthyCalculation=useMemo(()=>ExpensiveCalculation(counter), [counter])



  return (
    <div>
      <h1>Use-Memo</h1>
      <h2>Expensive-Calculation:{lenthyCalculation}</h2>

      <h1>Counter:{counter}</h1>
      <button onClick={()=>setCounter(counter + 1)}>+</button>
      <button onClick={AddTodo}>Add-Todo</button>
      {todos.map((data)=>{
        return(
            <div>
                <h3>{data}</h3>
            </div>
        )
      })}
    </div>
  )
}

function ExpensiveCalculation(number){
    console.log("ruuning valueee");
    for(var i=0; i<1000000000; i++){
        number +=1
    }
    return number;
}

export default UseMemo
