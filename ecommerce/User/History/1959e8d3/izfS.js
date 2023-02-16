import React, { useEffect,useState } from "react";
import Shopping from "./ShoppingSteps"
import { connect } from "react-redux";
import LoginMessage from "../LoginMessage";
import { getSingleProduct } from "../../actions"
import fakeStore from "../../apis/fakeStore"


const Cart=(props)=>{

    const [userId,setUserId]=useState("")
    const [productQty,setProductQty]=useState(0)
    useEffect(()=>{
                setUserId(window.localStorage.getItem("id"))
                // fetchUserCart()
      
    },[userId])

    // async  function fetchUserCart(){
    //         try{
    //         const response=await fakeStore.get(`/carts/${userId}`)
    //         if(response.data.products){
    //             for(let idx of response.data.products ){
    //                 props.getSingleProduct(idx.productId,idx.quantity)
                  
    //             }
    //         }
    //                }
    //     catch(error){
    //         console.log("from cart componenet api request",error)
    //     }
    //    }
 const renderedList=()=>{
    console.log("quantity of product",productQty)
            return(
                props.cartItems.map((item)=>{
                return(
                <div className="ui divided items" key={item.id}>
                <div className="item">  
                <div className="ui tiny image">
                <img src={`${item.image}`}/>
                </div>
                <div className="content">
                    <a className="header">{item.title}</a>
                    <div className="meta">
                        <span>Price:&#x20b9;{item.price}</span>
                        <span>Qty:{props.quantity.map((itemQty)=>item.id===itemQty.id?itemQty.quantity:productQty)}</span>
                    </div>
                        </div>
                        </div>
                            </div>
                )
                
            })
        )
    }
    if(window.localStorage.getItem("token")){
        return(
            <div>
                <Shopping/>
                {renderedList()}
                <button>NEXT</button>
                </div>
        )
    }
    else{
        return(
          <LoginMessage/>
        )
        
    }
    
}
const mapStateToProps=(state)=>{
     console.log("from cart component",state)
     
    return{
    cartItems:state.addToCart,
    quantity:state.setQty,
    getUserC
    
    }
}

export default connect(mapStateToProps,{getSingleProduct})(Cart)