import React ,{useState} from "react";
import Shopping from "../ShoppingSteps"
import LoginMessage from "../LoginMessage";
import CartDetails from "./CartDetails"
import ShippingDetails from "./ShippingDetails";

const Cart=()=>{
    const[completedStep1,setCompletedStep1]=useState(false);

    const setActiveStep=(activeFlag)=>{
        // console.log("active flag",activeFlag)
        setCompletedStep1(activeFlag)
    }
           if(window.localStorage.getItem("token")){
        return(
            <div>
                <Shopping completed1={completedStep1}/>
                
                {/* <CartDetails setActiveStep={setActiveStep}/> */}
                <ShippingDetails setActiveStep={setActiveStep}/>
                </div>
        )
    }
    else{
        return(
          <LoginMessage/>
        )
        
    }
    
}


export default Cart