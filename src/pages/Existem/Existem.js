import React from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Content from '../../Components/Content/Content';

function existem() {
    return (
        <>
            <Sidebar />

            <h1 className='home-title'>
                <span>Quantas criptomoedas existem?</span>
            </h1>

            <Content 
            text="
            
                Criptomoedas sao bla bla
                bladdmdasdaoidjao

                dd
            
            
            " />
        </>
    )   
}

export default existem;
