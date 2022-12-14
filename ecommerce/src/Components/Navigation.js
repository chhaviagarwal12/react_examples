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
import { useState } from 'react'
import SingleCategory from './Routes/SingleCategory'

const Navigation=()=>{
    const [selectedCategory,setSelectedCategory]=useState("")
  const setCategoryCallback=(category)=>{
      setSelectedCategory(category)
    }
   
    console.log("from navigation component",selectedCategory)
    return(
                  <div>
            <Routes>
             <Route path="/" element={<HomeImage/>}/>   
            <Route path="/products"  element={<Products returnCategory={setCategoryCallback}/>}></Route>
            <Route path={`/${selectedCategory}`}  element={<SingleCategory selectedCategory={selectedCategory}/>}></Route>
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