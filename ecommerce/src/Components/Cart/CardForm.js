import React from "react"

const CardForm=()=>{
    return(
        <div className="ui form">
            <div className="ui fluid icon input">
                 <label>Card Number</label>
                <input type="text" placeholder="Card Number"/>
                <i aria-hidden="true" class="credit card icon"></i>
            </div>
         
            <div className="ui fluid input">
                <label>Name on card</label>
                <input type="text" placeholder="Name on card"/>
            </div>
         
            
            <div className="equal width fields">
                <div className="field">
                <label>Expiry Date</label>
                <input type="text" placeholder="Valid Thru(MM/YY)"/>
                </div>
                <div className="field">
                <label>CVV</label>
                <input type="text" placeholder="CVV"/>
                </div>
            </div>
       </div>
    )
}
export default CardForm