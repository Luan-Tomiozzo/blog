import React from "react";
import { Link } from "react-router-dom";

import "./styles.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <ul className="lists">
                    <li className="item">
                        <Link className="link" to="/">Blog</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/sobre">Sobre</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/descricao">Descricao</Link>
                    </li>
                    <li className="item">
                        <Link className="link" to="/noticias">Noticias</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );

}