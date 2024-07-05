import React, { useState } from 'react';

const NewTodo = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    function handleChange(e) {
        setTodo(e.target.value);
    }

    function handleSubmit() {
       // Ensure we are not adding empty todos
            setTodos([...todos, todo]);
            setTodo("");
        
    }

    return (
        <div>
            <h1>New Todo</h1>
            <input type='text' value={todo} onChange={handleChange} placeholder='Add todo' />
            <button onClick={handleSubmit}>Add</button>

            <div>
                {todos.length > 0 ? (
                    todos.map((element) => (
                        <div >{element}</div>
                    ))
                ) : (
                    <p>No todos available</p>
                )}
            </div>
        </div>
    );
}

export default NewTodo;
