export default (state=[],action)=>{
    switch(action.type){
        case "I":
              return {
                
                categories:action.payload
            };
    
        default:
            return state
    }
}