import React, { useState } from "react";
import Shopping from "./ShoppingSteps"
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const Cart=(props)=>{



 const renderedList=()=>{
            return(
                props.cartItems.map((item)=>{
                return(
                <div className="ui items" key={item.id}>
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
            <div class="ui warning message">
            <div class="header">Please Login First!!</div>
            <p><Link to="/user">Redirect to Login Page</Link></p>
            </div>
        )
        
    }
    
}
const mapStateToProps=(state)=>{
     console.log("from cart component",state.setQty)
     
    return{
    cartItems:state.addToCart,
    quantity:state.setQty
    }
}

export default connect(mapStateToProps)(Cart)