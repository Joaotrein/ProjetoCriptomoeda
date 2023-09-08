import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Entrar from './pages/Entrar/Entrar';
import Cadastrar from './pages/Cadastrar/Cadastrar';
import Redefinir from './pages/Redefinir/Redefinir';
import Oquesao from './pages/Oquesao/Oquesao';
import Funcaomoeda from "./pages/Paraqueservem/Funcaomoeda";
import Obter from './pages/Obter/Obter';
import Seguras from './pages/Seguras/Seguras';
import Existem from './pages/Existem/Existem';
import Direitos from './pages/Direitos/Direitos';
import Investir from './pages/Investir/Investir';
import Noticia from './pages/Noticias/Noticias';
import Chatbot from './pages/Chatbot/Chatbot';


function RouterPage() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Entrar />} />
                    <Route path='/redefinir' element={<Redefinir />} />
                    <Route path='/cadastrar' element={<Cadastrar />} />
                    <Route path='/oquesao' element={<Oquesao />} />
                    <Route path='/funcaomoeda' element={<Funcaomoeda />} />
                    <Route path='/obter' element={<Obter />} />
                    <Route path='/seguras' element={<Seguras />} />
                    <Route path='/existem' element={<Existem />} />
                    <Route path='/direitos' element={<Direitos />} />
                    <Route path='/investir' element={<Investir />} />
                    <Route path='/noticias' element={<Noticia />} />
                    <Route path='/chatbot' element={<Chatbot />} />
                </Routes>
            </Router>
        </>
    )
}

export default RouterPage;