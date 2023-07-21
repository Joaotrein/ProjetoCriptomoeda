import React from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Chatbot from '../../Components/ChatbotLayout/Chatbot';


function chatbot() {
    return (
        <>
            <Sidebar />
            <h1 className='home-title'>
                <span>Chatbot</span>
            </h1>
            <Chatbot />          
        </>
    )   
}

export default chatbot;
