import axios from "axios"
import { createContext, useEffect, useReducer } from "react"


export const AuthContext=createContext()

const Reducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {...state,  username:action.payload}
        case "LOGOUT":
            return{...state, username:null}
        default :
        return state        
    }
}

const Initailstate={username:null}

const AuthContextComponents=({children})=>{
    const [state,dispatch]=useReducer(Reducer,Initailstate)

    function LOGIN(data){
        dispatch({type:"LOGIN" , payload:data})
    }

    function LOGOUT(){
        dispatch({type:"LOGOUT"})
    }

    async function getUserData(){
        try{
            const response=await axios.get("http://localhost:8000/api/v1/auth/validuser",{withCredentials:true})
        // const response={data:{success:true, userData:{name:"Shabaj",email:"shabaj@123"}}}
        if(response.data.success){
            LOGIN(response.data.user)
        }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
            getUserData()  
    },[])
    
    return(
        <AuthContext.Provider value={{state, LOGIN, LOGOUT}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextComponents