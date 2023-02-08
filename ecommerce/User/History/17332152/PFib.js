export default (state=[],action)=>{
    switch(action.type){
      
        case 'USER_DETAILS':
            console.log("In user details reducer")
                       return action.payload
            
               default:
                       return state
    }
}