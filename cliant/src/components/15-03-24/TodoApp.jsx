import React, { useState } from 'react'

const TodoApp = () => {

    const[todo,setTodo]=useState("")
    const [todos,setTodos]=useState([])

    // console.log(todos,"todos");
    
    function handleChange(event){
        setTodo(event.target.value)
    }

    function handleSubmit(){
        setTodos([...todos,todo])
        setTodo("")
    }

    function RemoveTodo(index){
        const deleteTodo=[...todos]
        deleteTodo.splice(index,1)
        setTodos(deleteTodo)
    }

    

    function RemoveAll(){
        setTodos([])
    }

    return (
    <div>
      <h2>Add-Todo</h2>
      <input  type='text' value={todo}  onChange={handleChange} placeholder='Add-Todo list..' />
        <button onClick={handleSubmit}>Add-Todo</button>

      {todos.length? <div>
        {todos.map((data,index)=>{

            return(
                
                <div key={index}>
                <h2> {index + 1} {data }
                <button  onClick={()=>RemoveTodo(index)}>Remove</button>
                </h2>
                 
                </div>
                
                
            )
        })}

        {todos.length >=1 && <button onClick={RemoveAll}>deleteAll</button>}
      </div>:<div><h1>todo not found</h1></div>}
    </div>
  )
}

export default TodoApp

