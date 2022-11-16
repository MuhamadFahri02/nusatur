import React from "react";
import Navbar from "../Components/Home/Navbar";

function Header() {
    return (
        <div id="main">
            <Navbar />
            <div className='name'>
                <h2>Jangan dirumah aja Indonesia itu indah !</h2>
                <p className="details" >Ayo liburan bersama NusaTur</p>
                <a href="/" className="cv-btn">Jelajahi</a> 
            </div>

        </div>
    )
}

export default Header;