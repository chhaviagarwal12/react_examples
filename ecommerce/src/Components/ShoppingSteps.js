import React ,{useState}from "react"
import {NavLink} from 'react-router-dom'

const ShoppingSteps=(props)=>{

    return(
        <div className="ui fluid steps">
            <div className={(props.completed1)?"disabled step":"active step"}>
        <i aria-hidden="true" className="cart icon"></i>
        <div className="content">
            <div className="title">Cart Details</div>
            </div>
            </div>
            <div className="disabled step"><i aria-hidden="true" className="truck icon"></i>
            <div className="content"><div className="title">Shipping Details</div>
    
            </div>
            </div>
            <div className="disabled step"><i aria-hidden="true" className="payment icon"></i>
            <div className="content"><div className="title">Payment</div>
            </div>
        </div>
        </div>
    )
}

export default ShoppingSteps

