import React from 'react';
import { ContainerConteudo } from '../../Components/Conteudo/Conteudo'
import SidebarHeader from '../../Components/SidebarHeader/SidebarHeader'
import Footer from '../../Components/Footer/Footer';
import conteudoData from '../../ConteudoJson/Conteudo.json';


const EstiloJson = ({ paragraphs }) => {
  const EstiloPalavras = (text) => {
    return text.replace(
      /Satoshi Nakamoto|instituições financeiras|blockchain|investimentos em criptomoedas têm riscos/gi,
      (conexao) => `
      <b style="color: #dea20a; font-weight: bold;">${conexao}</b>
    `
    );
  };

  return (
    <ContainerConteudo>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          dangerouslySetInnerHTML={{ __html: EstiloPalavras(paragraph) }}
        />
      ))}
    </ContainerConteudo>
  );
};

function oquesao() {
  const { oquesao } = conteudoData.conteudo[0];
  const paragraphs = Object.values(oquesao[0]);

  return (
    <>
      <SidebarHeader />
      <h1 className='home-title'>
        <span>O que são criptomoedas?</span>
      </h1>
      
      <EstiloJson paragraphs={paragraphs} />
      <Footer />
    </>
  );
}

export default oquesao;
