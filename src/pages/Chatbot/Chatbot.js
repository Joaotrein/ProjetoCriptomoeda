import React from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Chatbot from '../../Components/ChatbotLayout/Chatbot';


function chatbot() {
    return (
        <>
            <Sidebar />
                <h1>Chatbot</h1>
            <Chatbot />          
        </>
    )   
}

export default chatbot;
