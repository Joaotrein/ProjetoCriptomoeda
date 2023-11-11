import React, { useState } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import {
    Button,
    CampoSenha,
    ErrorMessage,
    FormArea,
    Forms,
    VizualizarSenha,
} from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmacaoSenha, setMostrarConfirmacaoSenha] =
        useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const notify = () => {
        toast.success("Registro bem-sucedido! Redirecionando para o login!", {
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
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        };

        try {
            const response = await axios.post(
                "http://localhost:8000/api/users/register",
                userData
            );

            if (response.status === 201) {
                notify(); 
                setTimeout(() => {
                    navigate("/");
                }, 3550);
            }
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.errors
            ) {
                setErrors(error.response.data.errors);
            } else if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                setErrors([error.response.data.message]);
            } else {
                console.error("Erro ao registrar o usuário:", error);
                setErrors([
                    "Erro ao registrar o usuário. Tente novamente mais tarde.",
                ]);
            }
        }
    };

    const clicarVerSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    const clicarVerConfirmacaoSenha = () => {
        setMostrarConfirmacaoSenha(!mostrarConfirmacaoSenha);
    };

    return (
        <>
            <Header />
            <FormArea>
                <Forms onSubmit={handleSubmit}>
                    <h2>Cadastro</h2>
                    <label>
                        <p>Nome</p>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        <p>E-mail</p>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Senha</p>
                        <CampoSenha>
                            <input
                                type={mostrarSenha ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <VizualizarSenha onClick={clicarVerSenha}>
                                <FontAwesomeIcon
                                    icon={mostrarSenha ? faEye : faEyeSlash}
                                />
                            </VizualizarSenha>
                        </CampoSenha>
                    </label>
                    <label>
                        <p>Confirmar senha</p>
                        <CampoSenha>
                            <input
                                type={
                                    mostrarConfirmacaoSenha
                                        ? "text"
                                        : "password"
                                }
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                            <VizualizarSenha
                                onClick={clicarVerConfirmacaoSenha}
                            >
                                <FontAwesomeIcon
                                    icon={
                                        mostrarConfirmacaoSenha
                                            ? faEye
                                            : faEyeSlash
                                    }
                                />
                            </VizualizarSenha>
                        </CampoSenha>
                    </label>
                    <Button type="submit">Criar conta</Button>
                    {errors.length > 0 && (
                        <ErrorMessage>
                            <ul>
                                {errors.map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        </ErrorMessage>
                    )}
                    <span>
                        Já possui uma conta? <Link to={"/"}>Faça login!</Link>
                    </span>
                </Forms>
            </FormArea>
            <ToastContainer />
        </>
    );
};

export default Register;
