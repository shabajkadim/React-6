import React, { useReducer } from 'react'

const Reducer=(state ,action)=>{
switch (action.type) {
    case "Increment":
        return {...state, counter:state.counter + action.payload}
    case "Decrement":
        return{...state, counter:state.counter - 1}
    case 'Reset':
        return{...state, counter:0}    

    default:
        return state
}
       
}

const InitianalState={counter:0  }

const UseReducer = () => {
    const[state,dispatch]=useReducer(Reducer,InitianalState )
    function increment(){
        dispatch({type:"Increment" , payload:10})
    }

    function decrement(){
        if(state.counter > 0){
            dispatch({type:"Decrement"})
        }
    }
    function reset(){
        dispatch({type:"Reset"})
    }
  return (
    <div>
      <h1>Reducer-page</h1>
      <h1>Counter : {state.counter}</h1>
      <button onClick={()=>increment()}>Increment</button>
      <button onClick={()=>decrement()}>Decrement</button>
      <button onClick={()=>reset()}>Reset</button>
    </div>
  )
}

export default UseReducer
