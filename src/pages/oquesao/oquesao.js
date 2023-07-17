import Sidebar from "../../Components/Sidebar/Sidebar";
import BotoesContent from '../../Components/BotoesContent/BotoesContent';
import Content from '../../Components/Conteudo/Conteudo';
import Footer from '../../Components/Footer/Footer';

function oquesao() {
  return (
    <>
      <Sidebar />

      <h1 className='home-title'>
        <span>O que são criptomoedas?</span>
      </h1>

      <BotoesContent />
      {Content.topico1}
      <Footer/>
    </>
  );
}

export default oquesao;
