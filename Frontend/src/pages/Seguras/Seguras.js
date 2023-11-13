import React from "react";
import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader";
import { ContainerConteudo } from "../../Components/Conteudo/Style.jsx";
import conteudoData from "../../ConteudoJson/Conteudo.json";
import Footer from "../../Components/Footer/Footer";
import { Title } from "../../Components/TitleStyle/Style.jsx";

const EstiloJson = ({ paragraphs }) => {
    const EstiloPalavras = (text) => {
        return text.replace(
            /Blockchain e Descentralização:|ataques cibernéticos.|Controle de Chaves Privadas:|uma pública e outra privada|Vulnerabilidades e Hacks:|Responsabilidade Individual:|alto nível de segurança|Criptografia:|criptografia avançados|moeda digital|as criptomoedas são notavelmente seguras/gi,
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
