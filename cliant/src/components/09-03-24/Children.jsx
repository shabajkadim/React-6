import React from 'react'
import './../../Style/children.css'

const Children = ({students ,counter}) => {
    console.log(students ,counter);
    console.log(counter);
  return (
    <div className='paintdin'>
      <h1 >Children :{counter}</h1>
      {students.map((data)=>{
        return(
            <div>
                <h2>{<li>{data}</li>}</h2>
            </div>
        )
      })}
    </div>
  )
}

export default Children
