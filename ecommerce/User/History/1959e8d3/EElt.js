import React, { useState } from "react";
import Shopping from "./ShoppingSteps"
import { connect } from "react-redux";
import {increaseQty} from "../../actions"

const Cart=(props)=>{
// let [qty,setQty]=useState(0)


 const renderedList=()=>{
            return(
                
            props.cartItems.map((item)=>{
                // const index= props.cartItems.findIndex(element=>element.id===item.id)
                // for(const keys in item){
                //     if()
                // }  

             if(props.cartItems.includes(item)){
            //    setQty(qty+=1)
             }
               
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
                        <span>Qty:</span>
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
            </div>
    )
}
const mapStateToProps=(state)=>{
     console.log("from cart component",state.addToCart)
     
    return{
    cartItems:state.addToCart
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    console.log("from cart component mapDispacthToProps",ownProps)
   return{
   setQty:dispatch(increaseQty(ownProps.qty+=1))
   }
}
export default connect(mapStateToProps)(Cart)