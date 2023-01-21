import React, { createContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import Products from "./Routes/ProductCategory"
import Search from './Routes/Search'
import Wishlist from './Routes/Wishlist'
import Cart from './Routes/Cart'
import Users from './Routes/Users'
import Orders from './Routes/Orders'
import Contact from './Routes/Contact'
import HomeImage from './HomePage/HomeImage'
import { useState } from 'react'
import SingleCategory from './Routes/ProductCatalogue'

export const SelectedProductContext=createContext()
const Navigation=()=>{
    const [selectedCategory,setSelectedCategory]=useState("")
    const [selectedProduct,setSelectedProduct]=useState({})
    const [qty,setQty]=useState(0)

    //using createContext to pass this callback down to ProductDescription component
    const setProductDescription=(productDescription)=>{
    // console.log("from navigation component",productDescription)
        setSelectedProduct(productDescription)
}
   
  const setCategoryCallback=(category)=>{
      setSelectedCategory(category)
    }

    //console.log("from navigation component",selectedCategory)
    return(
        <div>
            <Routes>
             <Route path="/" element={<HomeImage/>}/>   
            <Route path="/products"  element={<Products returnCategory={setCategoryCallback}/>}></Route>
            <Route path={`/${selectedCategory}`}  element={<SelectedProductContext.Provider value={setProductDescription}>
            <SingleCategory selectedCategory={selectedCategory} />
            </SelectedProductContext.Provider>
            }></Route>
            <Route path="/search"  element={<Search/>}></Route>
            <Route path="/wishlist"  element={<Wishlist/>}></Route>
            <Route path="/cart"  element={<Cart selectedProduct={selectedProduct} qty={setQty(qty)}/>}></Route>
            <Route path="/user" element={<Users/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            
            </Routes>
       
        </div>
        
        // 
        
  
        
    )
}
export default Navigation