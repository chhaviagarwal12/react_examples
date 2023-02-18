import React from "react"
import { connect } from "react-redux"

const ShippingDetails=({userProfile,setActiveStep})=>{
    return(
        <div >
            <div class="ui fluid card">
                <div class="content">
                    <div className="header">
                        Deliver to {((userProfile.data.name.firstname)+" "+(userProfile.data.name.lastname)).toUpperCase()}
                    </div>
                        
                <div class="description">
                {(userProfile.data.address.number)+","
                +((userProfile.data.address.street)+","
                +(userProfile.data.address.city)+","
                +(userProfile.data.address.zipcode))}
                </div>
                </div>
                <div class="extra content">
                <button onClick={()=>setActiveStep(true)}>CONFIRM</button>
                </div>
            </div>
                            
         </div>
             
    )
}
const mapStateToProps=(state)=>{
    return{
       userProfile:state.userProfile
   }
 }
export default connect(mapStateToProps)(ShippingDetails)