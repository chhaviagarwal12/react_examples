import React from "react";
import 'semantic-ui-css'

const MainMenu=()=>{
    return(
        <div className="ui secondary menu">
            <a className="active item">
                HOME
            </a>
            <a className="item">
                PRODUCTS
            </a>
            <a className="item">
                CONTACT US
            </a>
            <a className="item">
                <i className="heart">
                    WishList
                </i>
            </a>
            <a className="item">
                <i className="shopping cart">
                   Cart 
                </i>
            </a>
            <a className="item">
                <i className="user circle">
                   Cart 
                </i>
            </a>
        </div>    
        )
}
export default MainMenu