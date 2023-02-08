import React, { createContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import Products from "./Routes/ProductCategory"
import Search from './Routes/Search'
import Wishlist from './Routes/Wishlist'
import Cart from './Routes/Cart'
import Users from './Routes/UserLogin'
import Orders from './Routes/Orders'
import Contact from './Routes/Contact'
import HomeImage from './HomePage/HomeImage'
import UserProfile from './Routes/UserProfile'
import { useState } from 'react'
import SingleCategory from './Routes/ProductCatalogue'

export const SelectedProductContext=createContext()
const Navigation=()=>{
    const [selectedCategory,setSelectedCategory]=useState("")
    const [selectedProduct,setSelectedProduct]=useState({})
    const [image,setImage]=useState("")
    const [productName,setProductName]=useState("")
    const [wishlistedItem,setWishlistedItem]=useState({img:'',name:''})
    let array=[]
    if(wishlistedItem)
    array=[...array,wishlistedItem]
   
    

    //using createContext to pass this callback down to ProductDescription component
    const setProductDescription=(productDescription)=>{
    
        setSelectedProduct(productDescription)
        setImage(productDescription.image)
        setProductName(productDescription.title)
        setWishlistedItem({img:productDescription.image, name:productDescription.title})
        console.log("from navigation component",array)
}
   
  const setCategoryCallback=(category)=>{
      setSelectedCategory(category)
    }
   
   
    
   
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
            <Route path="/wishlist"  element={<Wishlist image={image} title={productName} wishlistedItem={wishlistedItem}/>}></Route>
            <Route path="/cart"  element={<Cart selectedProduct={selectedProduct} />}></Route>
            <Route path="/user" element={<Users/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/userprofile" element={<UserProfile/>}></Route>
            </Routes>
       
        </div>
        
        // 
        
  
        
    )
}
export default Navigation