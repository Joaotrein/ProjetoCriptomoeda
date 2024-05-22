// Importações
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../Components/Header/Header";
import { Button, FormArea, Forms, ErrorMessage } from "./Style";

// Componente Reset Email
const Reset = () => {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState("");

    const notify = () => {
        toast.success("Email enviado com sucesso!", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors([]);

        const userData = {
            email: email,
        };

        try {
            const response = await axios.post(
                "https://projetocriptomoeda.onrender.com/api/users/sendpasswordlink",
                userData
            );

            console.log(response);

            if (response.status === 200) {
                notify();
            }
        } catch (error) {
            setErrors(["Credenciais incorretas"]);
        }
    };

    return (
        <>
            <Header />
            <FormArea>
                <Forms onSubmit={handleSubmit}>
                    <h2>Criar nova senha</h2>
                    <label>
                        <p>E-mail</p>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <Button type="submit">Enviar E-mail</Button>

                    {errors && (
                        <ErrorMessage>
                            <li>{errors}</li>
                        </ErrorMessage>
                    )}
                    <span>
                        Voltar para o<Link to={"/"}> Login</Link>
                    </span>
                </Forms>
            </FormArea>
            <ToastContainer />
        </>
    );
};

export default Reset;
