export default (state=[],action)=>{
    switch(action.type){
        case "INCREASE_QTY":
              return {
                quantity:action.payload
            };
    
        default:
            return state
    }
}