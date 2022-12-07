
export default (state=[],action)=>{
    switch(action.type){
         
        case "SINGLE_PRODUCT":
            return action.payload;
        default:
            return state
    }
}
