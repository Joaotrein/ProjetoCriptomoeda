import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import BotoesContent from '../../Components/BotoesContent/BotoesContent';
import { ContainerConteudo } from '../../Components/Conteudo/Conteudo.jsx';
import Footer from '../../Components/Footer/Footer';
import conteudoData from '../../ConteudoJson/Conteudo.json';

function oquesao() {
  const { oquesao } = conteudoData.conteudo[0];
  const paragraphs = Object.values(oquesao[0]);

  return (
    <>
      <Sidebar />
      <h1 className='home-title'>
        <span>O que são criptomoedas?</span>
      </h1>
      <BotoesContent />
      <ContainerConteudo>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </ContainerConteudo>
      <Footer />
    </>
  );
}

export default oquesao;
