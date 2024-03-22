import counterReducer from "./conuter.Reducer.js";
import  {combineReducers} from 'redux'

const rootReducer=combineReducers({
    counter:counterReducer
})

export default rootReducer