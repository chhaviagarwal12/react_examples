import fakeStore from "../apis/fakeStore"

//for getting all products in all categories
export const getAllProducts=()=> async(dispatch)=>{
    const response=await fakeStore.get('/products')
    console.log("from action:",response)
    dispatch({
        type:'ALL_PRODUCTS',
        payload:response.data
    })
}
//getting single product in a selected category
export const getSingleProduct=(id)=>async dispatch=>{
    const response=await fakeStore.get('/products/:id')
    dispatch({
        type:'SINGLE_PRODUCT',
        payload:response.data
    })
}
//for getting all categories
export const getAllCategories=()=>async dispatch=>{
    const response=await fakeStore.get('/products/categories')
    // console.log("get all categories called",response.data)
    dispatch({
        type:'ALL_CATEGORIES',
        payload:response.data
    })
}
//for getting a single category
export const getSingleCategory=(category)=>async dispatch=>{
    console.log("action creator clicked",category)
    const response=await fakeStore.get(`/products/category/${category}`)
    dispatch({
        type:'SINGLE_CATEGORY',
        payload:response.data
    })
       
    
}
//for getting cart details
export const getCartDetails=(userId)=>async dispatch=>{
    const response=await fakeStore.get("/cart/?userId")
    return{
        type:'CART_DETAILS',
        payload:response.data
    }
}