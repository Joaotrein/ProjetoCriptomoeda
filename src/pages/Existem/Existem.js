import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../../Components/Sidebar/Sidebar";
import BotoesContent from "../../Components/BotoesContent/BotoesContent";
import { ContainerConteudo } from '../../Components/Conteudo/Conteudo.jsx';
import conteudoData from '../../ConteudoJson/Conteudo.json';
import Footer from "../../Components/Footer/Footer";

const EstiloJson = ({ paragraphs }) => {
  const EstiloPalavras = (text) => {
    return text.replace(
      /milhares de criptomoedas diferentes|2009|Ethereum, Ripple, Litecoin, Bitcoin Cash, Cardano e muitas outras.|dinâmica e inovadora|diferenças significativas entre elas|A diversidade pode trazer oportunidades|Ripple|Criptografia:|baixo custo e alta velocidade|é importante entender suas diferenças/gi,
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

const EstiloJsonComValores = ({ paragraphs, btcValor, ethValor }) => {
  const EstiloPalavras = (text) => {
    return text.replace(
      /milhares de criptomoedas diferentes|2009|Ethereum, Ripple, Litecoin, Bitcoin Cash, Cardano e muitas outras.|dinâmica e inovadora|diferenças significativas entre elas|A diversidade pode trazer oportunidades|Ripple|Criptografia:|baixo custo e alta velocidade|é importante entender suas diferenças/gi,
      (conexao) => `
        <b style="color: #dea20a; font-weight: bold;">${conexao}</b>
      `
    );
  };

  return (
    <ContainerConteudo>
      <p>Valor do Bitcoin: R$ {btcValor}</p>
      <p>Valor do Ethereum: R$ {ethValor}</p>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          dangerouslySetInnerHTML={{ __html: EstiloPalavras(paragraph) }}
        />
      ))}
    </ContainerConteudo>
  );
};

function Existem() {
  const { existem } = conteudoData.conteudo[4];
  const paragraphs = Object.values(existem[0]);

  const [btcValor, setBtcValor] = useState('');
  const [ethValor, setEthValor] = useState('');

  useEffect(() => {
    const moedas = 'BTC-BRL,ETH-BRL';
    const url = `https://economia.awesomeapi.com.br/last/${moedas}`;

    axios.get(url)
      .then(response => {
        const btcData = response.data['BTCBRL'];
        const ethData = response.data['ETHBRL'];

        if (btcData && ethData) {
          setBtcValor(btcData.ask);
          setEthValor(ethData.ask);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <Sidebar />
      <h1 className='home-title'>
        <span>Quantas criptomoedas existem?</span>
      </h1>
      <BotoesContent />
      {btcValor && ethValor ? (
        <EstiloJsonComValores paragraphs={paragraphs} btcValor={btcValor} ethValor={ethValor} />
      ) : (
        <EstiloJson paragraphs={paragraphs} />
      )}
      <Footer />
    </>
  );
}

export default Existem;
