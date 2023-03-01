import React from "react";
import { NavLink,Link } from "react-router-dom";
import CardForm from "./CardForm"
import UPIForm from "./UPIForm"
import Wallets from "./Wallets"

const PaymentDetails=()=>{
    return(
        <div>
            <div className="ui pointing pink secondary menu">
                <Link className="active item">Credit/Debit Card</Link>
                <Link className="item">UPI</Link>
                <Link className="item">Wallets</Link>
            </div>
                <div className="ui segment active tab">
                    {/* <CardForm/> */}
                    <UPIForm/>
                    {/* <Wallets/> */}
               
                    
                </div>
                </div>
    )
}
export default PaymentDetails