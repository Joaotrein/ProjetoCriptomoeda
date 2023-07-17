import Sidebar from "../../Components/Sidebar/Sidebar";
import BotoesContent from "../../Components/BotoesContent/BotoesContent";
import Content from "../../Components/Conteudo/Conteudo";
import Footer from "../../Components/Footer/Footer";

function obter() {
    return (
        <>
            <Sidebar />

            <h1 className='home-title'>
                <span>Como posso obter criptomoedas?</span>
            </h1>

            <BotoesContent />
            {Content.topico3}
            <Footer />
        </>
    )   
}

export default obter;
