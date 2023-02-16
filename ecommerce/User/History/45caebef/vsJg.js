import fakeStore from "../apis/fakeStore"

//for getting all products in all categories
// export const getAllProducts=()=> async(dispatch)=>{
//     const response=await fakeStore.get('/products')
//     // console.log("from action:",response)
//     dispatch({
//         type:'ALL_PRODUCTS',
//         payload:response.data
//     })
// }


// getting single product in a selected category
export const getSingleProduct=(productId,productQty)=>async dispatch=>{
    const response=await fakeStore.get(`/products/${productId}`)
    console.log("from singleProduct action creator called",response.data)
    dispatch({
        type:'SINGLE_PRODUCT',
        payload:{data:response.data,quantity:productQty}
    })
}


//for getting all categories
export const getAllCategories=()=>async dispatch=>{
    const response=await fakeStore.get('/products/categories')
    // console.log("get all categories called",response.data)
    dispatch({
        type:'ALL_CATEGORIES',
        payload:{data:response.data,status:response.status}
    })
}
//for getting a single category
export const getSingleCategory=(category)=>async dispatch=>{
     
    const response=await fakeStore.get(`/products/category/${category}`)
   
    console.log("action creator clicked",response)
    dispatch({
        type:'SINGLE_CATEGORY',
        payload:{data:response.data,status:response.status}
    })
}
//for user details
export const userDetails=(userId)=>async dispatch=>{
    
    const response=await fakeStore.get(`/users/${userId}`)
    // console.log("in user details action creator",response.data)
    dispatch({
        type:'USER_DETAILS',
        payload:{data:response.data,status:response.status}
    })
  
}

//for user login
export const userLogin=(username,passwd)=>async dispatch=>{
    
    const response=await fakeStore.post('/auth/login',{
        username: username,
       password: passwd
       })
    dispatch({
        type:'USER_LOGIN',
        payload:response.data
    })
  
}
//for adding items to cart
export const addToCart=(userId,date,product)=>async dispatch=>{
    // console.log("selected product action ",selectedProduct)
    const response=await fakeStore.post('/carts',{
        userId:userId,
        date:date,
        products:[product]
    })
    dispatch({
        type:"ADD_CART",
        payload:selectedProduct
    })
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
    const response=await fakeStore.get(`/carts/${userId}`)
    console.log("from getCartDetails action creator",response.data)
    dispatch({
        type:'CART_DETAILS',
        // payload:{data:response.data,status:response.status}
        payload:response.data
    })
}


