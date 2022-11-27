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
                <i className="red heart large icon">
                    WishList
                </i>
            </a>
            <a className="item" href="index.js">
                <i className="shopping cart large icon">
                   Cart 
                </i>
            </a>
            <a className="item" href="index.js">
                <i className="user circle large icon">
                   User 
                </i>
            </a>
        </div>    
        )
}
export default MainMenu