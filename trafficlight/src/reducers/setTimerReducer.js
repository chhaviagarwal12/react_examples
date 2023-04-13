export default (state=[],action)=>{
    switch(action.type){
        case 'START_TIMER':
            return [...state,action.payload]
            
            default:
                return state
    }
}