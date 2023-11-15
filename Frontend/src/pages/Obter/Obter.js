import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader";
import { ContainerConteudo } from "../../Components/Conteudo/Style.jsx";
import conteudoData from "../../ConteudoJson/Conteudo.json";
import Footer from "../../Components/Footer/Footer";
import { Title } from "../../Components/TitleStyle/Style.jsx";

const EstiloJson = ({ paragraphs }) => {
    const EstiloPalavras = (text) => {
        return text.replace(
            /bolsas de criptomoedas|mineração|recompensas e faucets|investimento direto em criptomoedas|finanças descentralizadas (DeFi)|plataformas P2P (peer-to-peer)|cartões de débito cripto|mercado de criptomoedas|segurança|carteiras cripto|autenticação de dois fatores|DeFi/gi,
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

function obter() {
    const { obter } = conteudoData.conteudo[2];
    const paragraphs = Object.values(obter[0]);
    return (
        <>
            <SidebarHeader />

            <Title>
                <h1>
                    <span>Como posso obter criptomeodas?</span>
                </h1>
            </Title>
            <EstiloJson paragraphs={paragraphs} />
            <Footer />
        </>
    );
}

export default obter;
