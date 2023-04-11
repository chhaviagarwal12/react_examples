export default(state,action)=>{
    switch(action.type){
        case 'START_TIMER':
            return{
                ...state,
                time:state.time+1,
                payload:action.payload
            }
    }
}