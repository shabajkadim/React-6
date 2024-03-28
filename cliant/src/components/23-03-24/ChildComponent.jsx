import React, { memo } from 'react'

const ChildComponent = ({todos,addTodo}) => {
    console.log("running todos");
   return(
    <div>
        {todos.map((todo,index)=>{
            return(
                <div key={index}>
                    <h3 > {todo}</h3>
                </div>
            )
        })}
        <button  onClick={addTodo}>Add-todo</button>
        
    </div>
   )
}

export default  memo(ChildComponent)