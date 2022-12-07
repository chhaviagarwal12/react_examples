import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSingleCategory } from "../../actions";

const SingleCategory=(props)=>{

    // const renderedList=()=>{
    //     if( props.allCategories.categories){
    //         return props.allCategories.categories.map((category)=>{
    //             return(
    //              <div className="ui eight wide column">
    //                 <div className="ui pink card" key={category} onClick={()=>{
    //                     returnCategory(category)
    //                     getSingleCategory(category)
    //                 }
    //             }>
    //                 <div className="ui fluid image">
    //                                         <img src={`images/${category}.jpg`} alt={`${category}`}/>   
    //                                         <div className="content">
    //                                             <div className="header">
    //                                              {category.toUpperCase()}
    //                                             </div>
    //                                             </div>                               
    //                             </div>
    //                 </div>
    //              </div>       
    //             )
    //        })
    //     }
    // }
    return(
       
        <div>

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