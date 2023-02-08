import React from "react";
import {connect} from "react-redux"
import { userDetails } from "../../actions";
import LoginMessage from "../LoginMessage";

const UserProfile=({userProfile})=>{
    console.log("user profile props",userProfile.name)
    
    if(userProfile.length===0){
        return(
            <LoginMessage/>
        )
    }
    else{
        return(
            <div className="ui divided items">
                <div className="item">
                    
                        <div className="content">
                          <div className="header">
                          Name:
                          <div className="meta">{((userProfile.name.firstname)+" "+(userProfile.name.lastname)).toUpperCase()}</div>
                          </div>
                        
                        <div className="description">
                            Address:{(userProfile.address.number)+","
                            +((userProfile.address.street)+","
                            +(userProfile.address.city)+","
                            +(userProfile.address.zipcode))}
                            </div>
                            <div className="extra">Additional Details</div>
                            </div></div>
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