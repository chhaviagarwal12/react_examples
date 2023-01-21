import React from "react"

const ShoppingSteps=()=>{
    return(
        <div className="ui fluid steps">
    <div className="active step">
        <i aria-hidden="true" className="cart icon"></i>
        <div className="content">
            <div className="title">Cart Details</div>
            {/* <div className="description">Choose your shipping options</div> */}
            </div>
            </div>
            <div className="step"><i aria-hidden="true" className="truck icon"></i>
            <div className="content"><div className="title">Shipping Details</div>
            {/* <div className="description">Enter billing information</div> */}
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

