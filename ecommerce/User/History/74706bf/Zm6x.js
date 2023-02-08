import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css'

import {NavLink} from 'react-router-dom'


const MainMenu=()=>{
    const [flag,setFlag]=useState(true)
    // console.log("from main menu component",window.localStorage.getItem("token"))
  
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
            < NavLink to="/user" className={({isActive})=>
                isActive ? 'pink active item':'item'} onClick={()=>{window.localStorage.clear()
                setFlag(!flag)
                }}>
                <i className="log out large icon">
                </i>
                {(window.localStorage.getItem("token"))?"LOGOUT":"LOGIN"}
            </NavLink>
            
        </div> 
    
 
        </>
          
        )
}
export default MainMenu