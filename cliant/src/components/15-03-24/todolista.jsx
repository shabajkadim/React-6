import React, { useState } from "react"

const TodoList=()=>{

    const[todo,setTodo]=useState("")
    const [todos,setTodos]=useState([])

    console.log(todo);
    function handleChange(event){
        setTodo(event.target.value)
    }

    function handleSubmit(){
       setTodos([...todos,todo])
       setTodo("") 
    }

    function remove(index){
        const removeData=[...todos]
        removeData.splice(index,1)
        setTodos(removeData)
    }

    return(
        <div>
            <h1>Todo</h1>
            <input type="text" value={todo} onChange={handleChange} placeholder="Add..." />
            <button onClick={handleSubmit}>ADD</button>

            {todos.length? <div>
                {todos.map((data,index)=>{
                    return(
                        <div key={index} >
                            <h1>{index +1}{data}
                            <button onClick={()=>remove(index)}>DELETE</button>
                            </h1>
                            {/* <button>DELETE</button> */}
                        </div>
                    )
                })}
            </div>:<div>Loading</div>}
        </div>
    )
}
export default TodoList