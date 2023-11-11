import React from "react";
import { Container } from "./Style.jsx";
import { Navigate } from "react-router-dom";

const SidebarItem = ({ Icon, Text }) => {
    return (
        <Container>
            <Icon />
            {Text}
        </Container>
    );
};

export default SidebarItem;
