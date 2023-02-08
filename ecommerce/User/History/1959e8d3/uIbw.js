import React, { useState } from "react";
import Shopping from "./ShoppingSteps"
import { connect } from "react-redux";


const Cart=(props)=>{

const renderQty=()=>{

    const productQuantity=props.quantity.map((qty)=>{
        console.log("cart",qty.quantity)
        return qty.quantity
             })
return productQuantity
}

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
                        <span>Qty:{}</span>
                    </div>
                        </div>
                        </div>
                            </div>
                )
                
            })
        )
    }
    
    return(
        <div>
            <Shopping/>
            {renderedList()}
            {renderQty()}
            </div>
    )
}
const mapStateToProps=(state)=>{
     console.log("from cart component",state.setQty)
     
    return{
    cartItems:state.addToCart,
    quantity:state.setQty
    }
}

export default connect(mapStateToProps)(Cart)