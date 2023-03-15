import React from "react";
import "./home.css"

function Cutaway(props) {
    
    return(
        <div className="cutaway">
            <div className="imgProduct">
                <img className="perfume" src={props.src}></img>
            </div>
            <div className="textProduct">
                <h4>{props.nameProduct}</h4>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default Cutaway;