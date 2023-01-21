export default (state=[],action)=>{
    
    switch(action.type){
        case "ADD_CART":
            console.log("add to cart",state)
            // action.payload["qty"]=1
       const index= state.findIndex(element=>element.id===action.payload.id)
    
            if(index===-1){
                return (
                    state=[...state,action.payload] 
                    )
            }
            else {
                // state[index].qty++ 
               
               return  state
            }
                     
            default:
            return state
    }
}