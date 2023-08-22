import React from "react"
import adopt from "../assets/logo.png"
import "./Header.css"


export default function Header () {
    return(
        <>
            <header className="header">
                <img src={adopt} alt="" className="img"/>
               

                <ul>
                    <li>Registro</li>
                    <li>Animales</li>
                    <li>Refugios</li>
                    <li>Dona</li>
                </ul>
            </header>
        </>
    )
}