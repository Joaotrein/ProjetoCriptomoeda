import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import AccountPage from "../pages/Account/MyAccount";
import Oquesao from "../pages/oquesao/oquesao";
import Funcaomoeda from "../pages/paraqueservem/funcaomoeda";
import Obter from "../pages/Obter/Obter";
import Seguras from "../pages/Seguras/Seguras";
import Existem from "../pages/Existem/Existem";
import Direitos from "../pages/Direitos/Direitos";
import Investir from "../pages/Investir/Investir";
import Noticia from "../pages/Noticias/Noticias";
import Chatbot from "../pages/Chatbot/Chatbot";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Reset from "../pages/Auth/Reset";

function RouterPage() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/ForgotPassword" element={<Reset />} />
                    <Route
                        path="/oquesao"
                        element={
                            <PrivateRoute>
                                <Oquesao />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/funcaomoeda"
                        element={
                            <PrivateRoute>
                                <Funcaomoeda />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/obter"
                        element={
                            <PrivateRoute>
                                <Obter />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/seguras"
                        element={
                            <PrivateRoute>
                                <Seguras />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/existem"
                        element={
                            <PrivateRoute>
                                <Existem />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/direitos"
                        element={
                            <PrivateRoute>
                                <Direitos />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/investir"
                        element={
                            <PrivateRoute>
                                <Investir />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/noticias"
                        element={
                            <PrivateRoute>
                                <Noticia />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/chatbot"
                        element={
                            <PrivateRoute>
                                <Chatbot />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/updateInformations"
                        element={
                            <PrivateRoute>
                                <AccountPage />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default RouterPage;
