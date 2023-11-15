import React from "react";
import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader";
import { ContainerConteudo } from "../../Components/Conteudo/Style.jsx";
import conteudoData from "../../ConteudoJson/Conteudo.json";
import Footer from "../../Components/Footer/Footer";
import { TabelaPreco } from "../../CriptoPrecoApi/ApiMoeda";
import { Title } from "../../Components/TitleStyle/Style.jsx";

const EstiloJson = ({ paragraphs }) => {
    const EstiloPalavras = (text) => {
        return text.replace(
            /Bitcoin|Ethereum|Ripple|Litecoin|Cardano|Polkadot|Binance Coin|Chainlink|Stellar|Dogecoin|Uniswap|VeChain|Polygon|Tezos/gi,
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
                    dangerouslySetInnerHTML={{
                        __html: EstiloPalavras(paragraph),
                    }}
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
            <Title>
                <h1>
                    <span>Quantas criptmoedas exitem?</span>
                </h1>
            </Title>
            <EstiloJson paragraphs={paragraphs} />
            <Footer />
        </>
    );
}

export default Existem;
