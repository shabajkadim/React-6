const InitialState={counter:1}

const counterReducer=(state=InitialState,action)=>{
    switch(action.type){
        case "Increment":
            return {...state,counter:state.counter + 1}
        case "Decrement":
            return {...state, counter:state.counter -1}
        default :
        return state        
    }
}

export default counterReducer