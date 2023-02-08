import { act } from "react-dom/test-utils"

export default (state=[],action)=>{
    switch(action.type){
        case "INCREASE_QTY":
            
            console.log("in set qty reducer1 ", action.id, action.quantity)
            const index = state.findIndex(element=>element.id===action.id)

            if(index===-1){
                return (state=[...state, {id:action.id, quantity: action.quantity}]) 
            }
            else {
                console.log("from set qty redducer",state)
            
                // const newState = state.map(i=> i.id === action.payload.id ?  
                //     {...state, quantity:i.quantity++} : state
                // )
                return {...state, ...state.map(i=> i.id === action.payload.id ?  
                    {...state, quantity:i.quantity++} : state
                )
                }
                // action.payload.quantity+=1
                
                //  return {action.payload 
            }
              
            case "DECREASE_QTY":
                console.log("in set qty reducer",action.payload)
                  return {
                    quantity:action.payload
                }
    
        default:
            return state
    }
}