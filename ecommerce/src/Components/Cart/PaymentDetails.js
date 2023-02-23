import React from "react";
import { NavLink } from "react-router-dom";
import CardForm from "./CardForm"
import UPIForm from "./UPIForm"
import Wallets from "./Wallets"

const PaymentDetails=()=>{
    return(
        <div>
            <div class="ui pointing secondary menu">
                <NavLink class="active item">Credit/Debit Card</NavLink>
                <NavLink class="item">UPI</NavLink>
                <NavLink class="item">Wallets</NavLink>
            </div>
                <div class="ui segment active tab">
                    <CardForm/>
                    {/* <UPIForm/>
                    <Wallets/> */}
               
                    
                </div>
                </div>
    )
}
export default PaymentDetails