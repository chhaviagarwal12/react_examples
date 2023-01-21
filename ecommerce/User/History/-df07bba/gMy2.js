import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { useState } from "react";
import { Image, Modal,Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { useContext } from "react";
import {SelectedProductContext} from "../Navigation"
import { addToCart } from "../../actions";
import {connect} from "react-redux"



const ProductDescription=({show,handleModalState,productDescription,addToCart})=>{
 // console.log("From modal",productDescription)
 const [open,setOpen] =useState(false)
 

const [qty,setQty]=useState(0)
 const setItem=useContext(SelectedProductContext)
 
    if(show){
           return(
        <Modal
        onClose={() => {setOpen(false);
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
        <Link to="/cart">
          
           <Button color='black' onClick={() =>
            {setOpen(false);
        setItem(productDescription)
        addToCart(productDescription)
       
      }}>
          Add to Cart
        </Button></Link>
        <Button color='green' onClick={() => setOpen(false)}>Buy Now</Button>
      </Modal.Actions>
      </Modal>
    ) 
    }
  }

 
export default connect(null,{addToCart})(ProductDescription)