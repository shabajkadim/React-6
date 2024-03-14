import React from 'react'
import Children from './Children'

const PropsDrilling = ({students  ,counter}) => {
    console.log(students, "student");
    // console.log(counter);
  return (
    <div>
      <Children students={students} counter={counter} />
    </div>
  )
}

export default PropsDrilling
