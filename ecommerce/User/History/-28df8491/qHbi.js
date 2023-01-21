import { act } from "react-dom/test-utils"

export default (state=[],action)=>{
    switch(action.type){
        case "INCREASE_QTY":
            console.log("in set qty reducer",state)
            const index= state.findIndex(element=>element.id===action.payload.id)
            let quantities=[]
            if(index===-1){
                
                return(
                     quantities=[...state,action.payload]
                )        
            }
            else {
                console.log("from set qty redducer",state)
                return{
                    ...state,quantities:action.payload.map((qty,i)=>i === 1 ? {...quantities, quantity: action.payload}
                    : qty)
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