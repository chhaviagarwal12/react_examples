import React from "react"

const Wallet=()=>{
    return(
    <div className="ui form">
        <div class="field">
            <div class="ui radio checkbox">
            <input type="radio" class="hidden" readonly="" tabindex="0" value="sm"/><label>Small</label>
            </div>
            <div class="ui radio checkbox">
            <input type="radio" class="hidden" readonly="" tabindex="0" value="md"/><label>Medium</label>
            </div>
            <div class="field">
            <div class="ui radio checkbox">
            <input type="radio" class="hidden" readonly="" tabindex="0" value="lg"/>
            </div>
            </div>
            <button class="ui button">Submit</button>
        </div>
   </div>
   )
}
export default Wallet