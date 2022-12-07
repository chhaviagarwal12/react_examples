import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCategories,getSingleCategory } from "../../actions";
import { Link } from "react-router-dom";


const Products=(props)=>{

    useEffect(()=>{
        props.getAllCategories()
        
    },[])
  
  
    
    const renderedList=()=>{
    if( props.allCategories.categories){
            return props.allCategories.categories.map((category)=>{
              
                return(
                   
                           <div className="ui eight wide column" key={category}>
                             <Link to={`/${category}`}>
                    <div className="ui pink card"  onClick={()=>{
                       (props.returnCategory(category)) 
                        props.getSingleCategory(category)}
                    }>
                    <div className="ui fluid image">
                                            <img src={`images/${category}.jpg`} alt={`${category}`}/>   
                                            <div className="content">
                                                <div className="header">
                                                 {category.toUpperCase()}
                                                </div>
                                                </div>                               
                                </div>
                    </div>
                    </Link>
                 </div> 
                  
                    
                )
           })
        }
    }
    return(
       
                <div className="ui relaxed two column grid">
                    <div className="row">
                         {renderedList()}
                                   </div>
                   
                    </div>
      )
}

const mapStateToProps=(state)=>{
return{
    allCategories:state.allCategories
}
}



export default connect(mapStateToProps,{getAllCategories,getSingleCategory})(Products)