import React from "react";
import {Link} from 

const Footer=()=>{
    return(
     <div className="ui container">  
      <div class="ui pink segment">
        <div class="ui very relaxed two column grid">
          <div class="column">
          <h3>
            Registered Office Address 
            </h3>
          <p>Buildings Alyssa,Begonia and Clover situated in Embassy Tech Village,Outer Ring Road,
            Devarabeesanahalli Village,Varthur Hobli,Bengaluru – 560103, India</p>
          </div>
          <div class="column">
           
            <p> CIN: U72300KA2007PTC041799<br/>
                Telephone: +91-80-61561999</p>
         
            </div>
            </div>
            <div class="ui vertical divider"></div>
            </div>
          <div className="text-center">Incase of any concern <Link to=""></Link>&copy; Copyright <h4>Shoppers World</h4></div>
        </div>
        
    
    )
}
export default Footer