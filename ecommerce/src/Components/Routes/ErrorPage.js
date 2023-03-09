import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = (location) => {
    let error = useRouteError();
    return(
        <div>
        <h2>No match found for {error.message}</h2>
     </div>
    )
   
    };
    export default ErrorPage