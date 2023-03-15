import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import RouterLayout from "./RouterLayout.js";
import About from "./About.js";
import Home from "./Home.js";
import Catalog from "./Catalog.js";
import Contact from "./Contact.js";
import NotFound from "./NotFound.js";

function Navigate(props) {
    
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<RouterLayout />}>
                <Route index element={<Home/>}></Route>
                <Route path="about" element={<About/>}></Route>    
                <Route path="catalog" element={<Catalog/>}></Route>        
                <Route path="contacts" element={<Contact/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Navigate;