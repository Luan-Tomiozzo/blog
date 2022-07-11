import { Route, BrowserRouter, Routes } from "react-router-dom"
import Blog from "../pages/blog"
import Sobre from "../pages/sobre"
import Descricao from "../pages/descricao"
import Navbar from "../components/navbar";
import Noticias from "../pages/noticias";

export default function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Blog />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/descricao" element={<Descricao />} />
                <Route path="/noticias" element={<Noticias />} />
            </Routes>
        </BrowserRouter>
    )
}