require("dotenv").config();

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// Chave secreta para assinar tokens JWT, obtida das variáveis de ambiente
const keysecret = process.env.JWT_SECRET;

// Configuração do transporte de e-mail usando o serviço Gmail e credenciais do remetente
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.gmail,
        pass: process.env.password,
    },
});

// Rota para enviar link de redefinição de senha por e-mail
router.post("/sendpasswordlink", async (req, res) => {
    const { email } = req.body;

    // Verifica se o e-mail foi fornecido
    if (!email) {
        return res
            .status(400)
            .json({ status: 400, message: "E-mail inválido fornecido." });
    }

    try {
        // Procura o usuário pelo e-mail fornecido
        const userfind = await User.findOne({ email });

        // Se o usuário não for encontrado, retorna um erro 404
        if (!userfind) {
            return res
                .status(404)
                .json({ status: 404, message: "Usuário não encontrado." });
        }

        // Gera um token JWT com o ID do usuário e uma chave secreta
        const token = jwt.sign({ _id: userfind._id }, keysecret, {
            expiresIn: "1h",
        });

        console.log("Token Gerado:", token);

        // Atualiza o usuário com o token de verificação gerado
        const updatedUser = await User.findByIdAndUpdate(
            { _id: userfind._id },
            { verifytoken: token },
            { new: true }
        );

        // Se a atualização do usuário falhar, retorna um erro interno do servidor
        if (!updatedUser) {
            return res.status(500).json({
                status: 500,
                message:
                    "Erro Interno do Servidor: Não foi possível atualizar o token do usuário.",
            });
        }

        // Configurações do e-mail a ser enviado
        const mailOptions = {
            from: process.env.gmail,
            to: email,
            subject: "Solicitação de Redefinição de Senha",
            html: `
                <h1>Olá!</h1>
                <p>Você solicitou a redefinição da sua senha. Clique no <a href="http://localhost:3000/forgotpassword/${userfind._id}/${updatedUser.verifytoken}">link</a> abaixo para criar uma nova senha:</p>
                <p>Lembrando que este link é válido por <b>1 hora.</b></p>
                <img src="https://cointimes.com.br/wp-content/uploads/2021/04/Gif-Bitcoin.gif" alt="Imagem" style="width: 300px; height: 200px;">
                <p>Qualquer dúvida, entre em contato conosco.</p>
            `,
        };

        // Envia o e-mail
        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                console.error("Erro ao enviar e-mail:", error);
                return res.status(500).json({
                    status: 500,
                    message:
                        "Erro Interno do Servidor: Não foi possível enviar o e-mail.",
                    error: error.message, // Adiciona a mensagem de erro para depuração
                });
            } else {
                return res
                    .status(200)
                    .json({
                        status: 200,
                        message: "E-mail enviado com sucesso.",
                    });
            }
        });
    } catch (error) {
        console.error("Erro:", error);
        return res.status(500).json({
            status: 500,
            message: "Erro Interno do Servidor.",
            error: error.message,
        });
    }
});

// Rota para verificar a validade do token de redefinição de senha
router.get("/forgotpassword/:id/:token", async (req, res) => {
    const { id, token } = req.params;

    try {
        // Procura um usuário válido pelo ID e token de verificação
        const validuser = await User.findOne({ _id: id, verifytoken: token });

        // Se o usuário for válido, retorna um status 200 e o usuário
        if (validuser) {
            return res.status(200).json({ status: 200, validuser });
        } else {
            return res.status(401).json({
                status: 401,
                message: "Usuário não encontrado ou token inválido.",
            });
        }
    } catch (error) {
        console.error("Erro:", error);
        return res.status(500).json({ status: 500, error });
    }
});

// Rota para redefinir a senha do usuário
router.post("/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;

    try {
        // Procura um usuário válido pelo ID e token de verificação
        const validuser = await User.findOne({ _id: id, verifytoken: token });

        // Se o usuário for válido, atualiza a senha e retorna um status 201
        if (validuser) {
            const newpassword = await bcrypt.hash(password, 12);

            const setnewuserpass = await User.findByIdAndUpdate(
                { _id: id },
                { password: newpassword }
            );

            setnewuserpass.save();
            return res.status(201).json({ status: 201, setnewuserpass });
        } else {
            return res.status(401).json({
                status: 401,
                message: "Usuário não encontrado ou token inválido.",
            });
        }
    } catch (error) {
        console.error("Erro:", error);
        return res.status(500).json({ status: 500, error });
    }
});

module.exports = router;
