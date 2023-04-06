export default (state=[],action)=>{
    switch(action.type){
        case 'SET_COLOR':
            return [...state,action.payload];
        default:
            return state
    }
}