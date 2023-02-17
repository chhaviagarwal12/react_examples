export default (state=[],action)=>{
    
    switch(action.type){
        //for adding new product in cart
        case "ADD_CART":
           
        console.log("from add to cart reducer--addto cart",state,"----response",action.payload.data)    
       const index= state.findIndex(element=>element.data.id===action.payload.data.id)
      
            if(index===-1){
                return (
                    state=[...state,action.payload] 
                    )
            }
            else {
                // return  state
                const newState = state.map(
                    element=> element.data.id === action.payload.data.id ?  
               
                {"data": element.data, "quantity": element.quantity+1}: {"data": element.data, "quantity": element.quantity}   

                )
                console.log("newState",newState)
                return newState 
            }
            //for existing cart of user
             case 'SINGLE_PRODUCT': 
            return(
                state=[...state,action.payload]
            )
            default:
            return state
    }
}