import  {combineReducers} from 'redux'
import counterReducer from './conuter.Reducer.js';
import themeReducer from './theme.reducer.js';

const rootReducer=combineReducers({
    counter:counterReducer,
    theme:themeReducer
})

export default rootReducer