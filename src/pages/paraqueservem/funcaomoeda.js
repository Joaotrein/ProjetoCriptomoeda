import React from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import BotoesContent from '../../Components/BotoesContent/BotoesContent';
import { ContainerConteudo } from '../../Components/Conteudo/Conteudo.jsx';
import conteudoData from '../../ConteudoJson/Conteudo.json';
import Footer from '../../Components/Footer/Footer';


function paraqueservem() {
    const { paraqueservem } = conteudoData.conteudo[1];
    const paragraphs = Object.values(paraqueservem[0]);
    return (
        <>
            <Sidebar />

            <h1 className='home-title'>
                <span>Para que servem as criptomoedas?</span>
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

export default paraqueservem;
