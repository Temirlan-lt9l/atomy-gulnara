import React from "react";
import {Link } from "react-router-dom";

function Header (props) {
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
            </nav>
    )
}

export default Header;
