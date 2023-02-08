import React from "react";
import 'semantic-ui-css/semantic.min.css'

import {NavLink} from 'react-router-dom'
import { Button } from "semantic-ui-react";

const MainMenu=()=>{

    const renderLoginButton=()=>{
        const options={value:"LOGIN"}
        console.log("profile button clicked")
        return(
            <div className="ui floating dropdown button" options={options} trigger={<></>}>
               <span className="text">LOGIN</span> 
            </div>
        )
    }
    const renderButton=()=>{
        console.log("profile button clicked")
            return(
                <div class="ui teal buttons"><button class="ui button">Save</button>
                <div role="listbox" aria-expanded="false" class="ui floating dropdown button icon" tabindex="0">
                    
                <i aria-hidden="true" class="dropdown icon"></i>
                <div class="menu transition">
                <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                <i aria-hidden="true" class="edit icon"></i><span class="text">Edit Post</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                <i aria-hidden="true" class="delete icon"></i><span class="text">Remove Post</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
            <i aria-hidden="true" class="hide icon"></i><span class="text">Hide Post</span></div></div></div></div>
            )
        
    }
    return(
        <>
            <div className="ui secondary menu">
            <NavLink to='/' className={({isActive})=>
                isActive ? 'pink active item':'item'} id="home" >
                     <i className="home large icon"></i>
                HOME
            </NavLink>
            <NavLink  id='products' to="/products" className={({isActive})=>
                isActive ? 'pink active item':'item'}   >
                     <i className="box large icon"></i>
                PRODUCTS
            </NavLink>
            <NavLink to="/search" className={({isActive})=>
                isActive ? 'pink active item':'search item'} id="sear">
            <i className="search large icon"></i>
                SEARCH
            </NavLink>
            
            <NavLink to="/wishlist" className={({isActive})=>
                isActive ? 'pink active item':'item'} >
                <i className="heart outline large icon">
                    
                </i>
                WISHLIST
            </NavLink>
            <NavLink to="/cart" className={({isActive})=>
                isActive ? 'pink active item':'item'} >
                <i className="shopping cart  large icon">
                                  </i>
                CART
            </NavLink>
            < NavLink to="/" className={({isActive})=>
                isActive ? 'pink active item':'item'} onClick={renderButton} >
                <i className="user circle outline large icon">
                </i>
                PROFILE
            </NavLink>
            
        </div> 
    
 
        </>
          
        )
}
export default MainMenu