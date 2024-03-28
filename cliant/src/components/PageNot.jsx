import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PageNot = () => {

    const router=useNavigate()


    useEffect(()=>{
      setTimeout(()=>{
        router('/')
      },3000)
    },[])

    

  return (
    <div>
      <h1>Pagenot fount</h1>
    </div>
  )
}

export default PageNot
