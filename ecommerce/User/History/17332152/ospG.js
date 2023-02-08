export default (state=[],action)=>{
    switch(action.type){
      
        case 'USER_DETAILS':
            console.log("In ")
                       return action.payload
            
               default:
                       return state
    }
}