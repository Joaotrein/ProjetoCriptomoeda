import React from "react";
import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader";
import { Title } from "../../Components/TitleStyle/Style";
import { InformationsContainer } from "./Style";
import { useLocation } from "react-router-dom";

const MyAccount = () => {
    const location = useLocation();
    const user = location.state;

    return (
        <>
            <SidebarHeader />
            <Title>
                <h1>
                    <span>Informações da conta</span>
                </h1>
            </Title>
            <InformationsContainer>
                <h2>Informações atuais</h2>
                <ul>
                    <li>Nome: {user?.name || "Guest"}</li>
                    <li>Email: {user?.email || "N/A"}</li>
                    {/* Exibindo "N/A" caso o email não esteja disponível */}
                    <li>Senha: {user?.password ? "********" : "N/A"}</li>
                    {/* Exibindo "N/A" se a senha não estiver disponível, ou você pode exibir asteriscos ou qualquer lógica apropriada para a segurança */}
                </ul>
            </InformationsContainer>
        </>
    );
};

export default MyAccount;
