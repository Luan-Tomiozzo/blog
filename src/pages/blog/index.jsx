import React from "react";
import Autor from "../../components/autor";
import Noticias from "../../components/noticias"
import Footer from "../../components/footer";
import { Link } from "react-router-dom";

export default function Blog() {
    return (
        <div>
            <div>
                <Autor />
                <Noticias />
                <Link className="ver-tudo" to="/noticias"><b>Ver tudo</b></Link>
            </div>
        </div>
    )
}