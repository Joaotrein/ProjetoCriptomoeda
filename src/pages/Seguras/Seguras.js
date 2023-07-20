import React from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import BotoesContent from '../../Components/BotoesContent/BotoesContent';
import { ContainerConteudo } from '../../Components/Conteudo/Conteudo.jsx';
import conteudoData from '../../ConteudoJson/Conteudo.json';
import Footer from '../../Components/Footer/Footer';


function Seguras() {
    const { seguras } = conteudoData.conteudo[3];
    const paragraphs = Object.values(seguras[0]);
    return (
        <>
            <Sidebar />

            <h1 className='home-title'>
                <span>As criptomoedas são seguras?</span>
            </h1>
            <BotoesContent />
            <ContainerConteudo>
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </ContainerConteudo>
            <Footer />
        </>
    )
}

export default Seguras;
