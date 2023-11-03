import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Oquesao from "./pages/oquesao/oquesao";
import Funcaomoeda from "./pages/paraqueservem/funcaomoeda";
import Obter from "./pages/Obter/Obter";
import Seguras from "./pages/Seguras/Seguras";
import Existem from "./pages/Existem/Existem";
import Direitos from "./pages/Direitos/Direitos";
import Investir from "./pages/Investir/Investir";
import Noticia from "./pages/Noticias/Noticias";
import Chatbot from "./pages/Chatbot/Chatbot";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function RouterPage() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/oquesao" element={<Oquesao />} />
                    <Route path="/funcaomoeda" element={<Funcaomoeda />} />
                    <Route path="/obter" element={<Obter />} />
                    <Route path="/seguras" element={<Seguras />} />
                    <Route path="/existem" element={<Existem />} />
                    <Route path="/direitos" element={<Direitos />} />
                    <Route path="/investir" element={<Investir />} />
                    <Route path="/noticias" element={<Noticia />} />
                    <Route path="/chatbot" element={<Chatbot />} />
                </Routes>
            </Router>
        </>
    );
}

export default RouterPage;
