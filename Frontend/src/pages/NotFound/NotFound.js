import React from "react";
import { TextArea } from "./Style";
import Header from "../../Components/Header/Header";

const NotFound = () => {
    return (
        <>
            <Header />
            <TextArea>
                <h1>404</h1>
                <h2>A página que está procurando não existe!</h2>
            </TextArea>
        </>
    );
};

export default NotFound;
