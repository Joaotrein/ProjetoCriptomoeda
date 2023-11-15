// Importações
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../Components/Header/Header";
import { Button, FormArea, Forms, ErrorMessage } from "./Style";

const ForgotPassword = () => {
    const { id, token } = useParams();
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [tokenValid, setTokenValid] = useState(true);

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

    const userValid = async () => {
        try {
            const res = await axios.get(`/forgotpassword/${id}/${token}`);
            const data = res.data; // Assuming that the response contains a JSON object

            if (data.status === 201) {
                console.log("user valid");
            } else {
                setTokenValid(false);
            }
        } catch (error) {
            console.error("Error checking user validity", error);
        }
    };

    useEffect(() => {
        userValid();
    }, []); // Run once on component mount

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const userData = {
            password: password,
        };

        try {
            const res = await axios.post(`http://localhost:8000/api/users/${id}/${token}`, userData);
            const data = res.data; // Corrected: use res.data instead of res.data

            if (data.status === 201) {
                setPassword("");
                notify("Password updated successfully");
            } else {
                setErrors(["Token Expired. Generate a new link."]);
            }
        } catch (error) {
            console.error("Error updating password", error);
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

                    {errors.length > 0 && (
                        <ErrorMessage>
                            {errors.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ErrorMessage>
                    )}

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
