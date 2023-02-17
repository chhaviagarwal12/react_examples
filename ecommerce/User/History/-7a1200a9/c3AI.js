export default (state=[],action)=>{
    
    switch(action.type){
        //for adding new product in cart
        case "ADD_CART":
           
            
       const index= state.findIndex(element=>element.id===action.payload.data.id)
       console.log("from add to cart reducer--addto cart",state,"----response",action.payload.data,"---index",index)
            if(index===-1){
                return (
                    state=[...state,action.payload] 
                    )
            }
            else {
                return  state
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