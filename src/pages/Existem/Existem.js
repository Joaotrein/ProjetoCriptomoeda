import Sidebar from "../../Components/Sidebar/Sidebar";
import BotoesContent from "../../Components/BotoesContent/BotoesContent";
import { ContainerConteudo } from '../../Components/Conteudo/Conteudo.jsx';
import conteudoData from '../../ConteudoJson/Conteudo.json';
import Footer from "../../Components/Footer/Footer";

const EstiloJson = ({ paragraphs }) => {
    const EstiloPalavras = (text) => {
      return text.replace(
        /milhares de criptomoedas diferentes|2009|Ethereum, Ripple, Litecoin, Bitcoin Cash, Cardano e muitas outras.|dinâmica e inovadora|diferenças significativas entre elas|A diversidade pode trazer oportunidades|Ripple|Criptografia:|baixo custo e alta velocidade|é importante entender suas diferenças/gi,
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
            <EstiloJson paragraphs={paragraphs} />
            <Footer />
        </>
    )
}

export default existem;
