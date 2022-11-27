import React from "react";
import 'semantic-ui-css/semantic.min.css'

const MainMenu=()=>{
    return(
        <div className="ui secondary menu">
            <a className="active item" href="index.js">
                HOME
            </a>
            <a className="item" href="index.js">
                PRODUCTS
            </a>
            <a className="item" href="index.js">
                CONTACT US
            </a>
            
            <a className="item" href="index.js">
                <i className="heart outline large icon">
                    
                </i>
                WISHLIST
            </a>
            <a className="item" href="index.js">
                <i className="shopping cart  large icon">
                   
                </i>
                CART
            </a>
            <a className="item" href="index.js">
                <i className="user circle outline large icon">
                   
                </i>
                USER
            </a>
            
        </div>    
        )
}
export default MainMenu