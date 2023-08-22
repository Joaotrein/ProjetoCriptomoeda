import React from 'react';
import { ContainerConteudo } from '../../Components/Conteudo/Conteudo'
import SidebarHeader from '../../Components/SidebarHeader/SidebarHeader'
import BotoesContent from '../../Components/BotoesContent/BotoesContent';
import Footer from '../../Components/Footer/Footer';
import conteudoData from '../../ConteudoJson/Conteudo.json';

const EstiloJson = ({ paragraphs }) => {
  const EstiloPalavras = (text) => {
    return text.replace(
      /Meio de Pagamento:|Transferências Internacionais:|Investimento:|Proteção contra Inflação:|se informem adequadamente/gi,
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



function paraqueservem() {
  const { paraqueservem } = conteudoData.conteudo[1];
  const paragraphs = Object.values(paraqueservem[0]);
  return (
    <>
      <SidebarHeader />

      <h1 className='home-title'>
        <span>Para que servem as criptomoedas?</span>
      </h1>
      <BotoesContent />
      <EstiloJson paragraphs={paragraphs} />
      <Footer />
    </>
  )
}

export default paraqueservem;
