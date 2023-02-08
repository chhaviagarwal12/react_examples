import React from "react";

const LoginMessage=()=>{
    return(
        <div class="ui pink warning message">
        <h2>Please Login First!!</h2>
        <p><Link to="/user">Redirect to Login Page</Link></p>
        </div>
    )
}