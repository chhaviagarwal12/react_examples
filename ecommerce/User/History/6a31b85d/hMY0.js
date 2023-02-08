import React from "react";
import {connect} from "react-redux"
import { userDetails } from "../../actions";
import LoginMessage from "../LoginMessage";

const UserProfile=({.})=>{
    // console.log("user profile props",..name) 
    
    if(!(window.localStorage.getItem("token"))){
        return(
            <LoginMessage/>
        )
    }
    else{
        return(
            <div>
                <div>
                <h2 className="ui center aligned header">My Profile</h2>
                </div>
                <div className="ui divided items">
               
                <div className="item">
                    
                        <div className="content">
                          <div className="header">
                          Name:
                          <div className="meta">{((..name.firstname)+" "+(..name.lastname)).toUpperCase()}</div>
                          </div>
                        </div>
                        </div>
                        <div className="item">
                        <div className="content">
                          <div className="header">
                          Address:
                          <div className="meta"> {(..address.number)+","
                            +((..address.street)+","
                            +(..address.city)+","
                            +(..address.zipcode))}</div>
                          </div>
                       
                            </div>
                            </div>
                            <div className="item">
                        <div className="content">
                          <div className="header">
                          Email:
                          <div className="meta"> {(..email)}</div>
                          </div>
                       
                            </div>
                            </div>
                            <div className="item">
                        <div className="content">
                          <div className="header">
                          Contact Number:
                          <div className="meta"> {(..phone)}</div>
                          </div>
                       
                            </div>
                            </div>
                            </div>
            </div>
            
        )
    }


}

const mapStateToProps=(state)=>{
    console.log("in user profile",state..)
    return{
       .:state..
   }
 }
export default connect(mapStateToProps,{userDetails})(UserProfile)