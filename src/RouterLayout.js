import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { Outlet} from "react-router-dom";


function RouterLayout (props) {
     return(
        <div className="wraper">
         <Header/>
         <Outlet/>
         <Footer/>
        </div>
     )
}

export default RouterLayout;