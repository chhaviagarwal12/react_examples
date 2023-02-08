import React from "react";
import {connect} from "react-redux"
import { userDetails } from "../../actions";
import LoginMessage from "../LoginMessage";

const UserProfile=({userProfile})=>{
    console.log("user profile props",userProfile.name) className="center aligned header"
    
    if(!(window.localStorage.getItem("token"))){
        return(
            <LoginMessage/>
        )
    }
    else{
        return(
            <div>
                <div>
                <h2 className="center aligned header">My Profile</h2>
                </div>
                <div className="ui divided items">
               
                <div className="item">
                    
                        <div className="content">
                          <div className="header">
                          Name:
                          <div className="meta">{((userProfile.name.firstname)+" "+(userProfile.name.lastname)).toUpperCase()}</div>
                          </div>
                        </div>
                        </div>
                        <div className="item">
                        <div className="content">
                          <div className="header">
                          Address:
                          <div className="meta"> {(userProfile.address.number)+","
                            +((userProfile.address.street)+","
                            +(userProfile.address.city)+","
                            +(userProfile.address.zipcode))}</div>
                          </div>
                       
                            </div>
                            </div>
                            <div className="item">
                        <div className="content">
                          <div className="header">
                          Email:
                          <div className="meta"> {(userProfile.email)}</div>
                          </div>
                       
                            </div>
                            </div>
                            <div className="item">
                        <div className="content">
                          <div className="header">
                          Contact Number:
                          <div className="meta"> {(userProfile.phone)}</div>
                          </div>
                       
                            </div>
                            </div>
                            </div>
            </div>
            
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