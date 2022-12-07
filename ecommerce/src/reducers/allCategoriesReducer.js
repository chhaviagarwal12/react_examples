export default (state=[],action)=>{
    switch(action.type){
        case "ALL_CATEGORIES":
              return {
                
                categories:action.payload
            };
    
        default:
            return state
    }
}