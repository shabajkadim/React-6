import React from 'react'
import './../../Style/reduxTheme-page.css'
import { useDispatch, useSelector } from 'react-redux'
import { dark, light } from './actions/theme.action'

const ThemeRedux = () => {
  const theme=useSelector((state)=>state.theme.theme)
  const dispatch=useDispatch()
  return (
    <div style={theme}    className='reduxTheme-page' >
    <h2 style={{paddingTop:"80px"}}>Theme-Redux </h2>
    <button   className='light-bton' onClick={()=>dispatch(light())}>
     <p onClick={()=>dispatch(dark())}>light</p>
    </button>
    
    <button  className='dark-botn' onClick={()=>dispatch(dark())}>
    <p onClick={()=>dispatch(light())} >dark</p> </button></div>
  )
}

export default ThemeRedux
