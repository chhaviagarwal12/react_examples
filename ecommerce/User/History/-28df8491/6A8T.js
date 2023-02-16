import { act } from "react-dom/test-utils"

export default (state=[],action)=>{
    switch(action.type){
        case "INCREASE_QTY":
            
            // console.log("in set qty reducer1 ", state)
            const index = state.findIndex(element=>element.id===action.payload.id)

            if(index===-1){
                return ([...state, action.payload]) 
            }
            else {
                console.log("from set qty redducer",state)

                const newState = state.map(
                    i=> i.id === action.payload.id ?  
                    {"id": i.id, "quantity": i.quantity+1}: {"id": i.id, "quantity": i.quantity}
                )
                // console.log("newState",newState)
                return newState 
            }
              
            case "DECREASE_QTY":
                const idx = state.findIndex(element=>element.id===action.payload.id)

                if(idx===-1){
                    return ([...state, action.payload]) 
                }
                else {
                    console.log("from set qty redducer",state)
    
                    const newState = state.map(
                        i=> i.id === action.payload.id ?  
                        {"id": i.id, "quantity": i.quantity-1}: {"id": i.id, "quantity": i.quantity}
                    )
                    console.log("newState",newState)
                    return newState 
                }
    
        default:
            return state
    }
}