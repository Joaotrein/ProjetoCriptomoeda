import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    Button,
    CampoSenha,
    FormArea,
    Forms,
    VizualizarSenha,
    ErrorMessage,
} from "./Style";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verSenha, setVerSenha] = useState(false);
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    const notify = () => {
        toast.success("Login bem-sucedido! Indo para o primerio conteúdo!", {
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
            password: password,
        };

        try {
            const response = await axios.post(
                "https://projetocriptomoeda-front.onrender.com/api/users/login",
                userData
            );

            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem("token", token);
                notify();
                setTimeout(() => {
                    navigate("/oquesao");
                }, 3550);
            }
        } catch (error) {
            setErrors(["Credenciais incorretas"]);
        }
    };

    const clicarVerSenha = () => {
        setVerSenha(!verSenha);
    };

    return (
        <>
            <Header />
            <FormArea>
                <Forms onSubmit={handleSubmit}>
                    <h2>Login</h2>
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
                                type={verSenha ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <VizualizarSenha onClick={clicarVerSenha}>
                                <FontAwesomeIcon
                                    icon={verSenha ? faEye : faEyeSlash}
                                />
                            </VizualizarSenha>
                        </CampoSenha>
                    </label>
                    <Button type="submit">Login</Button>

                    {errors && (
                        <ErrorMessage>
                            <li>{errors}</li>
                        </ErrorMessage>
                    )}

                    <span>
                        Esqueceu a senha?
                        <Link to={"/ForgotPassword"}> Criar nova senha!</Link>
                    </span>
                    <span>
                        Não tem conta?
                        <Link to={"/register"}> Cadastre-se!</Link>
                    </span>
                </Forms>
            </FormArea>
            <ToastContainer />
        </>
    );
};

export default Login;
