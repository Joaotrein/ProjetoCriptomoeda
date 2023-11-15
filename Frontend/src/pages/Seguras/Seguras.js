import React from "react";
import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader";
import { ContainerConteudo } from "../../Components/Conteudo/Style.jsx";
import conteudoData from "../../ConteudoJson/Conteudo.json";
import Footer from "../../Components/Footer/Footer";
import { Title } from "../../Components/TitleStyle/Style.jsx";

const EstiloJson = ({ paragraphs }) => {
    const EstiloPalavras = (text) => {
        return text.replace(
            /Ao ingressar|questão da segurança|atentos às últimas tendências e desenvolvimentos em segurança cibernética|sistema financeiro tradicional|Criado por Satoshi Nakamoto|histórico de transações|criptomoedas representam uma oportunidade|risco de fraudes|necessidade de intermediários|resistente a ataques maliciosos|algoritmos criptográficos|cadeia imutável|escalabilidade e interoperabilidade|segurança e eficiência|tecnologia inovadora/gi,
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

function Seguras() {
    const { seguras } = conteudoData.conteudo[3];
    const paragraphs = Object.values(seguras[0]);
    return (
        <>
            <SidebarHeader />

            <Title>
                <h1>
                    <span>As criptomoedas são seguras?</span>
                </h1>
            </Title>

            <EstiloJson paragraphs={paragraphs} />
            <Footer />
        </>
    );
}

export default Seguras;
