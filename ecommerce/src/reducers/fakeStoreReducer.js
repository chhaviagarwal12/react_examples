export default (state=[],action)=>{
    switch(action.type){
        case "ALL_CATEGORIES":
            return action.payload;
        case "ALL_PRODUCTS":
            return action.payload;
        case "SINGLE_CATEGORY":
            return action.payload;   
        case "SINGLE_PRODUCT":
            return action.payload;
        default:
            return state
    }
}
