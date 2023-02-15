import React, { useEffect,useState } from "react";
import Shopping from "./ShoppingSteps"
import { connect } from "react-redux";
import LoginMessage from "../LoginMessage";
import { getCartDetails } from "../../actions"


const Cart=(props)=>{

    const [userId,setUserId]=useState("")
    // setUserId(window.localStorage.getItem("id"))
    console.log("==from cart component render==")
    useEffect(()=>{
                props.getCartDetails(window.localStorage.getItem("id"))
                // props.getCartDetails(5)
      
    },[])

 const renderedList=()=>{
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
                        <span>Qty:{props.quantity.map((itemQty)=>item.id===itemQty.id?itemQty.quantity:"")}</span>
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
    getUserCart:state.getUserCart
    
    }
}

export default connect(mapStateToProps,{getCartDetails})(Cart)