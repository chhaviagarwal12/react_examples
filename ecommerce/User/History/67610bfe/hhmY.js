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
            <div>
            <i className="heart icon">
                    WishList
                </i>
            </div>
            <div className="right menu">
            <a className="item" href="index.js">
                <i className="heart icon">
                    WishList
                </i>
            </a>
            <a className="item" href="index.js">
                <i className="shopping cart icon">
                   Cart 
                </i>
            </a>
            <a className="item" href="index.js">
                <i className="user circle icon">
                   User 
                </i>
            </a>
            </div>
           
        </div>    
        )
}
export default MainMenu