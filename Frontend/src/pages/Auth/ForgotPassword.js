import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../Components/Header/Header";
import { Button, FormArea, Forms, ErrorMessage } from "./Style";

const ForgotPassword = () => {
    const { id, token } = useParams(); // Obtém parâmetros da URL usando o hook useParams do React Router
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [tokenValid, setTokenValid] = useState(true);

    // Função para exibir notificações usando react-toastify
    const notify = (message, type = "success") => {
        toast[type](message, {
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

    // Função para verificar se o usuário e token são válidos
    const userValid = async () => {
        try {
            const res = await axios.get(`/forgotpassword/${id}/${token}`);
            const data = res.data; // Supondo que a resposta contenha um objeto JSON

            // Verifica o status da resposta e atualiza o estado de acordo
            if (data.status === 201) {
                console.log("usuário válido");
            } else {
                setTokenValid(false);
            }
        } catch (error) {
            console.error("Erro ao verificar a validade do usuário", error);
        }
    };

    // Efeito useEffect para chamar a função userValid() assim que o componente for montado
    useEffect(() => {
        userValid();
    }, []);

    // Função para lidar com o envio do formulário de redefinição de senha
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const userData = {
            password: password,
        };

        try {
            const res = await axios.post(
                `https://projetocriptomoeda.onrender.com/api/users/${id}/${token}`,
                userData
            );
            const data = res.data;

            // Verifica o status da resposta e atualiza o estado de acordo
            if (data.status === 201) {
                setPassword("");
                notify("Senha atualizada com sucesso");
            } else {
                setErrors(["Token expirado. Gere um novo link."]);
            }
        } catch (error) {
            console.error("Erro ao atualizar a senha", error);
        }
    };

    return (
        <>
            <Header />
            <FormArea>
                <Forms onSubmit={handleSubmit}>
                    <h2>Digite a sua nova senha</h2>
                    <label>
                        <p>Nova Senha</p>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <Button type="submit">Enviar nova senha</Button>

                    <ErrorMessage>
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ErrorMessage>
                    {!tokenValid && (
                        <ErrorMessage>
                            <li>Token expirado. Gere um novo link.</li>
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

export default ForgotPassword;
