import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";

const Wishlist=(props)=>{
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
  
    // if(image || title){
    //     return(
    //         <div className="ui card">
    //             <div className="image">
    //                 <img src={`${image}`} alt="Product image"/>
    //                 </div>
    //                 <div className="content">
    //                     <div className="header">{title}</div>
    //                         <div className="extra content">
    //     <Button  icon color="red">
    //        Remove Item
    //        <i className="remove icon" ></i></Button>
    //     <Button color="black" icon>
          
    //         Add To Cart
    //         <i className="cart plus icon"></i></Button>
    // </div>
    //    </div>
    //    </div>
    //     )
    // }
    return(
        <div>

        </div>
    )
    
}

const mapStateToProps=(state)=>{
    console.log("from wishlist component",state.addToWishlist)
    return{
        addToWishlist:state.addToWishlist
    }
}
export default connect(mapStateToProps)(Wishlist)