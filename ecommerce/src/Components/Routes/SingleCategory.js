import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSingleCategory } from "../../actions";

const SingleCategory=(props)=>{
   

    const renderedList=()=>{
        if( props.singleCategory){
            return props.singleCategory.map((product)=>{
                return(
                 <div className="ui five wide column">
                    <div className="ui three raised pink card">
                        <div className="card">
                        <div className="ui fluid image">
                        <img src={product.image} alt={`${product.title}`}/>   
                            <div className="content">
                                <div className="header">
                                    {product.title.toUpperCase()}
                                    </div>
                                    <div className="extra content">
                                        <span>Price:&#x20b9;
                                        {product.price}</span>
            
                                    </div>
                                    <div className="extra">
                                      Rating:  <div class="ui star rating" data-rating={`${Math.round(product.rating.rate)}`}>{product.rating.rate}</div> 
                                    </div>
                                  
                                    </div>                               
                                </div>
                        </div>
                    
                    </div>
                 </div>       
                )
           })
        }
    }
    return(
       
        <div className="ui relaxed  grid">
        <div className="row">
             {renderedList()}
                       </div>
       
        </div>
      )

}
const mapStateToProps=(state)=>{
console.log("from map state to props of single category",state.singleCategory)
return{
    singleCategory:state.singleCategory
}
}


export default connect(mapStateToProps,{getSingleCategory})(SingleCategory)