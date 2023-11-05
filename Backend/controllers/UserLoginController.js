const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Importa o modelo de usuário
const bcrypt = require("bcrypt"); // Importa a biblioteca bcrypt para verificar senhas criptografadas
const jwt = require("jsonwebtoken"); // Importa a biblioteca jsonwebtoken para gerar tokens JWT

// Rota de login
router.post("/login", async (req, res) => {
    const { email, password } = req.body; // Extrai o email e a senha do corpo da solicitação

    try {
        // Encontre o usuário com o e-mail fornecido no banco de dados
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Usuário não encontrado." }); // Se o usuário não for encontrado, retorne um status 401 e uma mensagem de erro
        }

        // Verifique a senha
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Senha incorreta." }); // Se a senha estiver incorreta, retorne um status 401 e uma mensagem de erro
        }

        // Gere um token JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d", // O token expirará após 7 dias
        });

        res.status(200).json({ token }); // Se o login for bem-sucedido, retorne um status 200 e o token JWT no corpo da resposta
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro no processo de login." }); // Se ocorrer um erro durante o processo, retorne um status 500 e uma mensagem de erro
    }
});

module.exports = router;
