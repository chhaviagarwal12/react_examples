import React from "react";
import 'semantic-ui-css/semantic.min.css'

import {NavLink} from 'react-router-dom'
import { Button, Dropdown } from "semantic-ui-react";

const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
    { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
    { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
  ]
const MainMenu=()=>{

    const renderLoginButton=()=>{
       
        console.log("profile button clicked")
        return(
            <div >
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
            <Dropdown className={({isActive})=>
                isActive ? 'pink active item':'item'} 
                placeholder='Select Country'
                fluid
                search
                selection
                options={countryOptions} >
                {/* <i className="user circle outline large icon">
                </i> */}
                PROFILE
            </Dropdown>
            
        </div> 
    
 
        </>
          
        )
}
export default MainMenu