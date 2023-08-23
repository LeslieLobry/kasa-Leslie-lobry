import React from "react"; 
import "../Banniere/banniere.css"
function Barriere({image, title}) {
    return (
        <div className="baniere-components">
           <div className="baniere-img">
             <img src={image} alt="Kasa"/>
           </div>
           <div className="baniere-text">
            <h1>{title}</h1>
           </div>
        </div>)
}

export default Barriere