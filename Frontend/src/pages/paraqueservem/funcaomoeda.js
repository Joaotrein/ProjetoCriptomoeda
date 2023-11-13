import React from "react";
import { ContainerConteudo } from "../../Components/Conteudo/Style.jsx";
import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader";
import Footer from "../../Components/Footer/Footer";
import conteudoData from "../../ConteudoJson/Conteudo.json";
import { Title } from "../../Components/TitleStyle/Style.jsx";

const EstiloJson = ({ paragraphs }) => {
    const EstiloPalavras = (text) => {
        return text.replace(
            /Meio de Pagamento:|Transferências Internacionais:|Investimento:|Proteção contra Inflação:|se informem adequadamente|Privacidade Financeira:|Inclusão Financeira:|Desenvolvimento Tecnológico:/gi,
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
        </ContainerConteudo>
    );
};

function paraqueservem() {
    const { paraqueservem } = conteudoData.conteudo[1];
    const paragraphs = Object.values(paraqueservem[0]);
    return (
        <>
            <SidebarHeader />

            <Title>
                <h1>
                    <span>Para que serve as criptomoedas?</span>
                </h1>
            </Title>

            <EstiloJson paragraphs={paragraphs} />
            <Footer />
        </>
    );
}

export default paraqueservem;
