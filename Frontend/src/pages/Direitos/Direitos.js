import conteudoData from "../../ConteudoJson/Conteudo.json";
import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader";
import { Title } from "../../Components/TitleStyle/Style";
import { ContainerConteudo } from "../../Components/Conteudo/Style";
import Footer from "../../Components/Footer/Footer";

const EstiloJson = ({ paragraphs }) => {
    const EstiloPalavras = (text) => {
        return text.replace(
            /2023|Lei 14.478\/2022|Congresso Nacional|normas|BC|3.844|4.004|direitos|informação|proteção|indenização|Mudanças|empresas|benefícios|redução de riscos|Segurança|transparência|investidores|proteção|Lei 14.478\/2022|mercado mais seguro|investidores/gi,
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

function direitos() {
    const { direitos } = conteudoData.conteudo[5];
    const paragraphs = Object.values(direitos[0]);

    return (
        <>
            <SidebarHeader />
            <Title>
                <h1>
                    <span>Quais direitos eu possuo?</span>
                </h1>
            </Title>
            <EstiloJson paragraphs={paragraphs} />
            <Footer />
        </>
    );
}

export default direitos;
