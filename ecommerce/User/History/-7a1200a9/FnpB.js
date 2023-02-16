export default (state=[],action)=>{
    
    switch(action.type){
        //for adding new product in cart
        case "ADD_CART":
           
            
       const index= state.findIndex(element=>element.id===action.payload.id)
    
            if(index===-1){
                return (
                    state=[...state,action.payload] 
                    )
            }
            else {
                return  state
            }
            //for existing cart of user
            //  case 'SINGLE_PRODUCT': 
            //  const idx= state.findIndex(element=>element.id===action.payload.id)
    
            //  if(idx===-1){
            //      return (
            //          state=[...state,action.payload] 
            //          )
            //  }
            //  else {
            //      return  state
            //  }     
            default:
            return state
    }
}