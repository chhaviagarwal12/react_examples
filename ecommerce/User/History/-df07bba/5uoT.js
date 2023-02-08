import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { useState } from "react";
import { Image, Modal,Button } from 'semantic-ui-react'
// import {Link} from 'react-router-dom'
import { useContext } from "react";
import {SelectedProductContext} from "../Navigation"
import { addToCart, increaseQty } from "../../actions";
import {connect} from "react-redux"



const ProductDescription=({show,handleModalState,productDescription,addToCart,increaseQty})=>{
// console.log("From modal",productDescription)
 const [open,setOpen] =useState(false)

 const setItem=useContext(SelectedProductContext)
 
    if(show){
           return(
        <Modal
        onClose={() => {
          setOpen(false);
         handleModalState(false)//telling parent component about click on close icon
        }}
        onOpen={() =>{
          setOpen(true);
          handleModalState(true)
        } }
        closeIcon
        open={!open}
       >
        <Modal.Header>{productDescription.title}</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src={`${productDescription.image}`} wrapped />
          <Modal.Description size="large">
            <b><p>{productDescription.description}</p></b>
             <h3>Price:&#x20b9;{productDescription.price}</h3>
            <h3>Rating:{productDescription.rating.rate}</h3>
            <h3>Reviewed by:{productDescription.rating.count} people</h3>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
     <Button className="ui animated button">
      <div className="visible content">
        <i className="ui heart icon"></i>
      </div>
      <div className="hidden content">
        Wishlist
      </div>
     </Button>
         
           <Button color='black' onClick={() =>{
        setItem(productDescription)
        addToCart(productDescription)
        increaseQty(productDescription.id,1)
        handleModalState(false)
      }}>
          Add to Cart
        </Button>
       
        <Button color='green' onClick={() => handleModalState(false)}>Buy Now</Button>
      </Modal.Actions>
      </Modal>
    ) 
    }
  }

 
export default connect(null,{addToCart,increaseQty})(ProductDescription)