import React from "react";
import "../Stylesheet/Loader.scss"
import Spinner from "../image/throbber_12.gif"
const Loader = () =>{
    return(
        <div className={"loader"}>
            <img src={Spinner}/>
        </div>
    )
}
export default Loader