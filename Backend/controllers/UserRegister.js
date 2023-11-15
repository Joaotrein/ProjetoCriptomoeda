const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Rota para criar uma nova conta de usuário
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res
                .status(400)
                .json({ message: "O e-mail já está em uso." });
        }

        // Criptografe a senha antes de armazená-la no banco de dados
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
            message: "Conta de usuário criada com sucesso.",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao criar a conta de usuário." });
    }
});

module.exports = router;
