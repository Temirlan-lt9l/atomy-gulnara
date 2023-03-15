import React from "react";
import Cutaway from "./Cutaway.js";
import "./home.css"
import mainImg from "./img/img1.png"
import perfume from "./img/perfume.png"

function Home (props) {
    return(
        <div className="conteiner">
            <div className="box">
                <div className="left">
                    <img className="photo" src={mainImg}></img>
                </div>
                <div className="rigth">
                    <h1>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nemo commodi, nisi eum quo amet ipsum sapiente voluptas exercitationem libero quod explicabo saepe. Corrupti, temporibus neque excepturi harum nihil a.
                    </h1>
                </div>
            </div>
            <div className="box">
                <div className="gag">
                <h3>CATALOG</h3>

                <div className="miniGrid">
                    <Cutaway src={perfume} nameProduct={"Perfume"} text={ "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nemo commodi, nisi eum quo amet ipsum sapiente voluptas exercitationem libero quod explicabo saepe. Corrupti, temporibus neque excepturi harum nihil a."}/>
                    <Cutaway src={perfume} nameProduct={"Perfume"}  text={ "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nemo commodi, nisi eum quo amet ipsum sapiente voluptas exercitationem libero quod explicabo saepe. Corrupti, temporibus neque excepturi harum nihil a."}/>
                    <Cutaway src={perfume} nameProduct={"Perfume"}  text={ "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nemo commodi, nisi eum quo amet ipsum sapiente voluptas exercitationem libero quod explicabo saepe. Corrupti, temporibus neque excepturi harum nihil a."}/>
                    <Cutaway src={perfume} nameProduct={"Perfume"}  text={ "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nemo commodi, nisi eum quo amet ipsum sapiente voluptas exercitationem libero quod explicabo saepe. Corrupti, temporibus neque excepturi harum nihil a."}/>
                    <Cutaway src={perfume} nameProduct={"Perfume"}  text={ "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nemo commodi, nisi eum quo amet ipsum sapiente voluptas exercitationem libero quod explicabo saepe. Corrupti, temporibus neque excepturi harum nihil a."}/>
                    <Cutaway src={perfume} nameProduct={"Perfume"}  text={ "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nemo commodi, nisi eum quo amet ipsum sapiente voluptas exercitationem libero quod explicabo saepe. Corrupti, temporibus neque excepturi harum nihil a."}/>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Home