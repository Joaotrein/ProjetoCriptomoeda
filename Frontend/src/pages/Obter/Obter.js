import SidebarHeader from '../../Components/SidebarHeader/SidebarHeader'
import { ContainerConteudo } from '../../Components/Conteudo/Style.jsx';
import conteudoData from '../../ConteudoJson/Conteudo.json';
import Footer from "../../Components/Footer/Footer";

const EstiloJson = ({ paragraphs }) => {
    const EstiloPalavras = (text) => {
        return text.replace(
            /diferentes tipos de criptomoedas|Compra em Exchanges|Mineração:|problemas matemáticos complexos|novas unidades da criptomoeda|Por Troca|peer-to-peer|particularidades e riscos associados|ICOs e IEOs.|tendências e regulamentações/gi,
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

function obter() {
    const { obter } = conteudoData.conteudo[2];
    const paragraphs = Object.values(obter[0]);
    return (
        <>
            <SidebarHeader />

            <h1 className='home-title'>
                <span>Como obter Criptomoedas?</span>
            </h1>
            <EstiloJson paragraphs={paragraphs} />
            <Footer />
        </>
    )
}

export default obter;