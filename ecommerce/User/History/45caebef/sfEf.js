import fakeStore from "../apis/fakeStore"

//for getting all products in all categories
export const getAllProducts=()=> async(dispatch)=>{
    const response=await fakeStore.get('/products')
    // console.log("from action:",response)
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
     
    const response=await fakeStore.get(`/products/category/${category}`)
   
    // console.log("action creator clicked",response.data)
    dispatch({
        type:'SINGLE_CATEGORY',
        payload:response
    })
}
//for user details
export const userDetails=(userId)=>async dispatch=>{
    
    const response=await fakeStore.get(`/users/${userId}`)
    console.log("in user details action creator",response.data)
    dispatch({
        type:'USER_DETAILS',
        payload:response.data
    })
  
}

//for adding items to cart
export const addToCart=(selectedProduct)=>{
    // console.log("selected product action ",selectedProduct)

    return{
        type:"ADD_CART",
        payload:selectedProduct
    }
}

export const increaseQty=(idParam, qtyParam)=>{
    return{
        type:"INCREASE_QTY",
        payload: {"id": idParam, "quantity": qtyParam}
    }
}

export const decreaseQty=(idParam, qtyParam)=>{
    return{
        type:"DECREASE_QTY",
        payload:{"id": idParam, "quantity": qtyParam}
    }
}

export const addToWishlist=(selectedProduct)=>{
    console.log("selected product action ",selectedProduct)
    return{
        type:"ADD_WISHLIST",
        payload:selectedProduct
    }
}
//for getting cart details
export const getCartDetails=(userId)=>async dispatch=>{
    const response=await fakeStore.get("/cart/?userId")
    return{
        type:'CART_DETAILS',
        payload:response.data
    }
}


