import fakeStore from "../apis/fakeStore"

//for getting all products in all categories
export const getAllProducts=()=> async(dispatch)=>{
    const response=await fakeStore.get('/products')
    dispatch({
        type:ALL_PRODUCTS,
        payload:response
    })
}
//getting single product in a selected category
export const getSingleProduct=(id)=>async dispatch=>{
    const response=await fakeStore.get('/products/:id')
    dispatch({
        type:SINGLE_PRODUCT,
        payload:response
    })
}
//for getting all categories
export const getAllCategories=()=>async dispatch=>{
    const response=await fakeStore.get('/products/categories')
    dispatch({
        type:ALL_CATEGORIES,
        payload:response
    })
}
//for getting a single category
export const getSingleCategory=(category)=>async dispatch=>{
    const response=await fakeStore.get("/products/categories/:category")
    return{
        type:SINGLE_CATEGORY,
        payload:response
    }
}
//for getting cart details
export const getCartDetails=(userId)=>async dispatch=>{
    const response=await fakeStore.get("/cart/?userId")
    return{
        type:CART_DETAILS,
        payload:response
    }
}