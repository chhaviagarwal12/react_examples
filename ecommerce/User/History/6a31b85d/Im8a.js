import React from "react";
import {connect} from "react-redux"
import { userDetails } from "../../actions";
import LoginMessage from "../LoginMessage";

const UserProfile=({userProfile})=>{
    console.log("user profile props",userProfile.name)
    const name={userProfile.name}
    if(userProfile.length===0){
        return(
            <LoginMessage/>
        )
    }
    else{
        return(
            <div className="ui items">
                <div className="item">
                    
                        <div className="content">
                          <div className="header">
                          Name:
                          <div className="meta">{((userProfile.name.firstname)+" "+(userProfile.name.lastname)).toUpperCase()}</div>
                          </div>
                        
                        <div className="description">
                            Address:{(userProfile.address.number)+","}
                            </div>
                            <div className="extra">Additional Details</div>
                            </div></div>
                            <div className="item">
                                <div className="ui tiny image">
                                    <img src="/images/wireframe/image.png"/></div>
                                    
                                    <div className="content"><a className="header">Header</a>
                                    <div className="meta">Description</div><div className="description">
                                        <img src="/images/wireframe/short-paragraph.png" className="ui image"/></div>
                                        <div className="extra">Additional Details</div></div></div></div>
        )
    }


}

const mapStateToProps=(state)=>{
    console.log("in user profile",state.userProfile)
    return{
       userProfile:state.userProfile
   }
 }
export default connect(mapStateToProps,{userDetails})(UserProfile)