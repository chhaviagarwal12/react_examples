export default (state=[],action)=>{
    
    switch(action.type){
        case "ADD_CART":
            console.log("add to cart",state)
            
       const index= state.findIndex(element=>element.id===action.payload.id)
    
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