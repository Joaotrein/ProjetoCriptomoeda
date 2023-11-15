import React from "react";
import { ContainerConteudo } from "../../Components/Conteudo/Style.jsx";
import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader";
import Footer from "../../Components/Footer/Footer";
import conteudoData from "../../ConteudoJson/Conteudo.json";
import { Title } from "../../Components/TitleStyle/Style.jsx";

const EstiloJson = ({ paragraphs }) => {
    const EstiloPalavras = (text) => {
        return text.replace(
            /criação das criptomoedas|Satoshi Nakamoto|revolução financeira|blockchain|Bitcoin|Ethereum|Ripple|Litecoin|processo de mineração|diversidade no universo|educação em criptomoedas|revolução digital do dinheiro|oportunidades em criptomoedas|desafios no Brasil|falta de informações|educação financeira|segurança digital|risco em investimentos/gi,
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
                    dangerouslySetInnerHTML={{
                        __html: EstiloPalavras(paragraph),
                    }}
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
            <Title>
                <h1>
                    <span>O que são criptomeodas?</span>
                </h1>
            </Title>
            <EstiloJson paragraphs={paragraphs} />

            <Footer />
        </>
    );
}

export default oquesao;
