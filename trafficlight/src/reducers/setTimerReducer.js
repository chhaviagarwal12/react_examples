export default (state=[],action)=>{
   
    switch(action.type){
        case 'START_TIMER':
            return [...state,action.payload]
        
        case 'STOP_TIMER':
            return state
            default:
                return state
    }
}