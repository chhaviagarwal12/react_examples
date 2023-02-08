import React from "react";
import { Button } from "semantic-ui-react";

const Wishlist=()=>{
  
    if(image || title){
        return(
            <div className="ui card">
                <div className="image">
                    <img src={`${image}`} alt="Product image"/>
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                            <div className="extra content">
        <Button  icon color="red">
           Remove Item
           <i className="remove icon" ></i></Button>
        <Button color="black" icon>
          
            Add To Cart
            <i className="cart plus icon"></i></Button>
    </div>
       </div>
       </div>
        )
    }
    
}

const mapStateToProps=(state)=>{
    return{
        
    }
}
export default Wishlist