import React from "react";
import 'semantic-ui-css/semantic-min-css'

const MainMenu=()=>{
    return(
        <div className="ui secondary menu">
            <a className="active item" href="">
                HOME
            </a>
            <a className="item" href="">
                PRODUCTS
            </a>
            <a className="item" href="">
                CONTACT US
            </a>
            <a className="item" href="">
                <i className="heart">
                    WishList
                </i>
            </a>
            <a className="item" href="">
                <i className="shopping cart">
                   Cart 
                </i>
            </a>
            <a className="item" href="">
                <i className="user circle">
                   Cart 
                </i>
            </a>
        </div>    
        )
}
export default MainMenu