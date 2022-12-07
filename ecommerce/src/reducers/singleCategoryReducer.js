export default (state=[],action)=>{
    switch(action.type){
       
        case "SINGLE_CATEGORY":
            return action.payload;   
       
        default:
            return state
    }
}