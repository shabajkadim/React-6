import React, { createContext, useState } from 'react'

export const MyConterContext=createContext()

const ProviderCounterContext = ( {children}) => {
    const[counter,setCounter]=useState(0)

    function increment(){
        setCounter(counter + 1)
    }

    function decrement(){
        if(counter > 0){
            setCounter(counter - 1)
        }
    }

    function reset(){
        setCounter(0)
    }
  return (
    <div>
      <MyConterContext.Provider value={{counter, increment , decrement , reset}}>
        {children}
      </MyConterContext.Provider>
    </div>
  )
}

export default ProviderCounterContext
