


export default (state=[],action)=>{
   
    switch(action.type){
        case 'START_TIMER':
            
            state=[...state,action.payload]
         return state
        
        case 'STOP_TIMER':
            return state
            default:
                return state
    }
}