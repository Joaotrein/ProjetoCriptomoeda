import React from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import BotoesContent from '../../Components/BotoesContent/BotoesContent';
import Content from '../../Components/Conteudo/Conteudo';
import Footer from '../../Components/Footer/Footer';


function paraqueservem() {
    return (
        <>
            <Sidebar />

            <h1 className='home-title'>
                <span>Para que servem as criptomoedas?</span>
            </h1>

            <BotoesContent />
            {Content.topico2}
            <Footer />
        </>
    )
}

export default paraqueservem;
