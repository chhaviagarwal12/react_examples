import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import ProductDescription from "./ProductDescription";
import { useState } from "react";
import Loader from "../Loader";


const SingleCategory=(props)=>{
   
    const [show,setShow] =useState(false)
    const [idx,setIdx]=useState(null)
    const [dropdownValue,setDropdownValue]=useState(false)

    useEffect(()=>{
        console.log("in useEffect")
    },[dropdownValue])
    const handleModalState=(props)=>{
        // console.log(props)
        setShow(props)
    }
    
    const sortByPrice=()=>{
        console.log("in sort by price",props.singleCategory.data)
        props.singleCategory.data.sort((a,b)=>a.price-b.price)
        setDropdownValue(true)
    }
    const renderedList=()=>{
        if(props.singleCategory){
            // props.singleCategory.forEach(element=>element["qty"]=qty)
            return props.singleCategory.data.map((product,index)=>{
                return(
                    <div className="ui raised pink card" id="category-card"key={`${product.id}`} onClick={()=>{
                        setShow(!show);
                        setIdx(index);
                    } }>
                    
                        {/* <div className="card"> */}
                        <div className="ui fluid image" id="category-image">
                        <img src={product.image} alt={`${product.title}`} id="product-image"/>   
                            <div className="content">
                                <div className="header" id="category-header">
                                    {product.title.toUpperCase()}
                                    </div>
                                    <div className="extra content">
                                        <span>Price:&#x20b9;
                                        {product.price}</span>
            
                                    </div>
                                    <div className="extra">
                                      Rating: {product.rating.rate} 
                                      {/* <div class="ui star rating" data-rating={`${Math.round(product.rating.rate)}`}></div>  */}
                                    </div>
                                  
                                    </div>                               
                                </div>
                        {/* </div> */}
                    
                    </div>
                //  </div>       
                )
           })
        }
      
    }
    if(props.singleCategory.status===200){
        return(
        
            <div>
               
                
                 <h1 className="main-header">{props.selectedCategory.toUpperCase()}</h1>
                <div class="ui compact menu">
                <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
                <div aria-atomic="true" aria-live="polite" role="alert" class="divider text">Sort by</div>
                <i aria-hidden="true" class="dropdown icon"></i><div class="menu transition">
                <div style={{pointerEvents:"all"}} role="option" 
                aria-checked="false" aria-selected="true" class="item" >
                <span class="text">Price</span></div>
                <div style={{pointerEvents:"all"}} role="option" aria-checked="false" aria-selected="false" class="item">
                <span class="text">Name</span></div>
                </div></div></div>
                 <div className="ui relaxed three column  grid">
                 <div className="row" >
                 {renderedList()}
                  <ProductDescription show={show} handleModalState={handleModalState} productDescription={props.singleCategory.data[idx]}/>
     
                            </div>
            
             </div>
            </div>
            
           )
    }
   else if(!props.singleCategory.status){
    return <Loader/>
   }

}
const mapStateToProps=(state)=>{
// console.log("from map state to props of single category",state.singleCategory)

return{
    singleCategory:state.singleCategory
}
}


export default connect(mapStateToProps)(SingleCategory)