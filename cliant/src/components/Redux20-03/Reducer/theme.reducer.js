
const ThemeData={
    light:{
        background:"rgb(255,255,255)",
        color:"rgb(0,29,53)",
    },
    dark:{
        background:"rgb(0,29,53)",
        color:"rgb(255,255,255)",
    }
}
const InitailState={ theme: ThemeData.light}


const themeReducer=(state=InitailState, action)=>{
    switch(action.type){
        case "Light":
            return   {...state, theme:ThemeData.light}
        case "Dark":
            return  {...state , theme:ThemeData.dark} 
        default :
        return state       
    }
}

export default  themeReducer