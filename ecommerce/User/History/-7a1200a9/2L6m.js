export default (state=[],action)=>{
    
    switch(action.type){
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
            case "ADD_WISHLIST":
            const idx= state.findIndex(element=>element.id===action.payload.id)
    
            if(index===-1){
                return (
                    state=[...state,action.payload] 
                    )
            }
            else {
                return  state
            }
                          
            default:
            return state
    }
}