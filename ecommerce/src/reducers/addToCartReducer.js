export default (state=[],action)=>{
    
    switch(action.type){
        //for adding new product in cart
        case "ADD_CART":
      
       const index= state.findIndex(element=>element.data.id===action.payload.data.id)
      
            if(index===-1){
                return (
                    state=[...state,action.payload] 
                    )
            }
            else {
              
        const newState = state.map(
        element=> element.data.id === action.payload.data.id ?  
        {"data": element.data, "quantity": element.quantity+1}: 
        {"data": element.data, "quantity": element.quantity})
        return newState 
            }
            //for existing cart of user
             case 'SINGLE_PRODUCT': 
            return(
                state=[...state,action.payload]
            )

            case 'INCREASE_QTY':
              console.log("increase qty",action.payload)
              const newState1 = state.map(
                element=> element.data.id === action.payload ?  
                {"data": element.data, "quantity": element.quantity+1}: 
                {"data": element.data, "quantity": element.quantity})
                return newState1    
        
                case 'DECREASE_QTY':
                    // const newState2 = state.map(
                    //     element=> element.data.id === action.payload ?  
                    //     {"data": element.data, "quantity": element.quantity-1}: 
                    //     {"data": element.data, "quantity": element.quantity})
                    //     return newState2   
                    const newState2 = state.map(
                        element=> (element.data.id === action.payload && element.quantity>0)?  
                        {"data": element.data, "quantity": element.quantity-1}: 
                        {"data": element.data, "quantity": element.quantity})
                        return newState2  
            // case 'RESET_STATE':
            //     console.log("reset state",state)
            //     return(
            //         state
            //     )
            default:
            return state
    }
}