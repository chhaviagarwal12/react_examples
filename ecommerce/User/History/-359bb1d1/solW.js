export default (state=[],action)=>{
    switch(action.type){
        case "INCREASE_QTY":
              return {
                categories:action.payload
            };
    
        default:
            return state
    }
}