import React from 'react';
import { ContainerConteudo } from '../../Components/Conteudo/Conteudo'
import Sidebar from '../../Components/Sidebar/Sidebar';
import BotoesContent from '../../Components/BotoesContent/BotoesContent';
import Footer from '../../Components/Footer/Footer';
import conteudoData from '../../ConteudoJson/Conteudo.json';

const EstiloJson = ({ paragraphs }) => {
  const EstiloPalavras = (text) => {
    return text.replace(
      /Meio de Pagamento:|Transferências Internacionais:|Investimento:|Proteção contra Inflação:|se informem adequadamente/gi,
      (conexao) => `
        <a href="${PalavraLink(conexao)}" style="text-decoration: none; color: #dea20a; font-weight: bold;">
          <b>${conexao}</b>
        </a>
      `
    );
  };

  const PalavraLink = (palavra) => {
    // Aqui podemos ver qual palavra leva para qual link;
    if (palavra === "Satoshi Nakamoto") {
      return "https://example.com/satoshi";
    } else if (palavra === "instituições financeiras") {
      return "https://example.com/financeiras";
    } else if (palavra === "blockchain") {
      return "https://www.infomoney.com.br/";
    } else {
      return "#";
    }
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
            <Sidebar />

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
