import React from "react";
import {Link } from "react-router-dom";
import whatsapp from "./img/whatsapp.png"
import instagram from "./img/instagram.png"

function Footer (props) {
    return(
              <nav >
                <div>
                <h2 className="title">
                    <Link to="/">Gulnara</Link>
                </h2>
                </div>
                <ul>
                    <li>
                    <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <Link to='/about'>About</Link>
                    </li> 
                    <li>
                    <Link to='/contacts'>Contacts us</Link>
                    </li>
                    <li>
                    <Link to='/catalog'>Catalog</Link>
                    </li>
                </ul>
                <div className="socialMedia">
                    <a href="#"><img className="social" src={whatsapp}></img></a> 
                   <a href="#"><img className="social" src={instagram}></img></a> 
                </div>
                
            </nav>
    )
}

export default Footer;