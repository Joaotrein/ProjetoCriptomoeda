import Sidebar from "../../Components/Sidebar/Sidebar";
import BotoesContent from "../../Components/BotoesContent/BotoesContent";
import { ContainerConteudo } from '../../Components/Conteudo/Conteudo.jsx';
import conteudoData from '../../ConteudoJson/Conteudo.json';
import Footer from "../../Components/Footer/Footer";

function obter() {
    const { obter } = conteudoData.conteudo[2];
    const paragraphs = Object.values(obter[0]);
    return (
        <>
            <Sidebar />

            <h1 className='home-title'>
                <span>Como obter Criptomoedas?</span>
            </h1>
            <BotoesContent />
            <ContainerConteudo>
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </ContainerConteudo>
            <Footer />
        </>
    )
}

export default obter;
