import react, { useState } from 'react';
import logo from './images/logo_image.png';  // to load imgage

export default function Header() {
    return(
        <>
            <div className="header">
                <img src={logo} alt="" width="70px" height="50px"/>
                <h3>Sachin Notes</h3>
            </div>
        </>
    )
}