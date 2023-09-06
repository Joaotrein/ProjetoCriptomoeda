import React from 'react';
import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader";
import BotoesContent from "../../Components/BotoesContent/BotoesContent";
import { ContainerConteudo } from '../../Components/Conteudo/Conteudo.jsx';
import conteudoData from '../../ConteudoJson/Conteudo.json';
import Footer from "../../Components/Footer/Footer";
import { TabelaPreco } from '../../CriptoPrecoApi/ApiMoeda';

const EstiloJson = ({ paragraphs }) => {
  const EstiloPalavras = (text) => {
    return text.replace(
      /milhares de criptomoedas| 2009| |Bitcoin| |Ethereum|Ripple|Litecoin|Cardano|dinâmica e inovadora|estudar suas características|aplicativos descentralizados|mportante entender suas diferenças|preço atual|    /gi,
      (conexao) => `
        <b style="color: #dea20a; ">${conexao}</b>
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
          <TabelaPreco />
    </ContainerConteudo>
  );
};

function Existem() {
  const { existem } = conteudoData.conteudo[4];
  const paragraphs = Object.values(existem[0]);

  return (
    <>
      <SidebarHeader />
      <h1 className='home-title'>
        <span>Quantas criptomoedas existem?</span>
      </h1>
      <EstiloJson paragraphs={paragraphs} />
      <Footer />
    </>
  );
}

export default Existem;