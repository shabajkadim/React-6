import React from 'react'
import   {useSelector,useDispatch}   from 'react-redux'
import { Decrement, Increment } from './actions/counter.action'

const CounterRedux = () => {
    const counter=useSelector((state)=>state.counter.counter)
    const dispatch=useDispatch()

  return (
    <div>
      <h1>Redux-Counter</h1>
      <h3>Counter:{counter}</h3>
      <button onClick={()=>dispatch(Increment())}>+</button>
      <button onClick={()=>dispatch(Decrement())}>-</button>
    </div>
  )
}

export default CounterRedux
