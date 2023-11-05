const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Importa o modelo de usuário
const bcrypt = require("bcrypt"); // Importa a biblioteca bcrypt para criptografar senhas

// Rota para criar uma nova conta de usuário
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body; // Extrai o nome, email e senha do corpo da solicitação

    try {
        // Verifique se o e-mail já está cadastrado
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res
                .status(400)
                .json({ message: "O e-mail já está em uso." }); // Se o e-mail já estiver em uso, retorne um status 400 e uma mensagem de erro
        }

        // Criptografe a senha antes de armazená-la no banco de dados
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crie um novo objeto de usuário com o nome, email e senha criptografada
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        // Salve o novo usuário no banco de dados
        await newUser.save();

        res.status(201).json({
            message: "Conta de usuário criada com sucesso.",
        }); // Se a criação da conta for bem-sucedida, retorne um status 201 e uma mensagem de sucesso
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao criar a conta de usuário." }); // Se ocorrer um erro durante o processo, retorne um status 500 e uma mensagem de erro
    }
});

module.exports = router;
