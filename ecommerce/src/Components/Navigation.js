import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Products from "./Routes/Products"
import Search from './Routes/Search'
import Wishlist from './Routes/Wishlist'
import Cart from './Routes/Cart'
import Users from './Routes/Users'
import Orders from './Routes/Orders'
import Contact from './Routes/Contact'
import HomeImage from './HomePage/HomeImage'

const Navigation=()=>{
    return(
      
            
        <div>
            <Routes>
             <Route path="/" element={<HomeImage/>}/>   
            <Route path="/products"  element={<Products/>}></Route>
            <Route path="/search"  element={<Search/>}></Route>
            <Route path="/wishlist"  element={<Wishlist/>}></Route>
            <Route path="/cart"  element={<Cart/>}></Route>
            <Route path="/user" element={<Users/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            
            </Routes>
       
        </div>
        
        
        
  
        
    )
}
export default Navigation