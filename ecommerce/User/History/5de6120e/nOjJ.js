import React from "react";
import { Button } from "semantic-ui-react";

const Wishlist=({image,title})=>{
    const array=[]
    //array.push({img:image,name:title})
  const newArray=  [...array,{img:image,name:title}]
console.log("from wishlist component",newArray)
    if(image || title){
        return(
            <div className="ui card">
                <div className="image">
                    <img src={`${image}`} alt="Product image"/>
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        {/* <div className="meta"><span className="date">Joined in 2015</span></div>
                        <div className="description">Matthew is a musician living in Nashville.</div></div>
                        <div className="extra content"><a><i aria-hidden="true" className="user icon"></i>22 Friends</a></div></div> */}
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

export default Wishlist