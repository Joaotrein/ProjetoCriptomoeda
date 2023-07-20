import Sidebar from "../../Components/Sidebar/Sidebar";
import BotoesContent from "../../Components/BotoesContent/BotoesContent";
import { ContainerConteudo } from '../../Components/Conteudo/Conteudo.jsx';
import conteudoData from '../../ConteudoJson/Conteudo.json';
import Footer from "../../Components/Footer/Footer";


function existem() {
    const { existem } = conteudoData.conteudo[4];
    const paragraphs = Object.values(existem[0]);
    return (
        <>
            <Sidebar />

            <h1 className='home-title'>
                <span>Quantas criptomoedas existem?</span>
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

export default existem;
