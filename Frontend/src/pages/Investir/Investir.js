import conteudoData from "../../ConteudoJson/Conteudo.json";
import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader";
import { Title } from "../../Components/TitleStyle/Style";
import { ContainerConteudo } from "../../Components/Conteudo/Style";
import Footer from "../../Components/Footer/Footer";

const EstiloJson = ({ paragraphs }) => {
    const EstiloPalavras = (text) => {
        return text.replace(
            /Investimento|Carteira digital|Exchange|Diversificação|Metas de investimento|Análise técnica|Volatilidade|Chaves privadas|Comunidades e fóruns|Tributação|Gradualidade|Portfólio|Regulamentação|Estratégia de investimento/gi,
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
function investir() {
    const { investir } = conteudoData.conteudo[6];
    const paragraphs = Object.values(investir[0]);

    return (
        <>
            <SidebarHeader />
            <Title>
                <h1>
                    <span>Como investir em criptomoedas?</span>
                </h1>
            </Title>
            <EstiloJson paragraphs={paragraphs} />
            <Footer />
        </>
    );
}

export default investir;
