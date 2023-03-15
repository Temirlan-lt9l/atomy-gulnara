import React from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import { Outlet} from "react-router-dom";


function RouterLayout (props) {
     return(
        <div className="wraper">
         <Header/>
         <Outlet/>
        </div>
     )
}

export default RouterLayout;