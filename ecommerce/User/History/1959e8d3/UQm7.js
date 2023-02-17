import React from "react";
import Shopping from "./ShoppingSteps"
import { connect } from "react-redux";
import LoginMessage from "../LoginMessage";
import { getSingleProduct } from "../../actions"



const Cart=(props)=>{

  const renderedList=()=>{
     console.log("props.cartItems",props.cartItems)
            return(
                props.cartItems.map((item)=>{
                    console.log("item cart component",item)
                return(
                    <div className="ui segments">
                        
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
    console.log("from cart component",state.addToCart)
     
    return{
    cartItems:state.addToCart,
    quantity:state.setQty,
    // getUserCart:state.getUserCart
    
    }
}

export default connect(mapStateToProps,{getSingleProduct})(Cart)