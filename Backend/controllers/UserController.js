const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

//Função para gerar o token

const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d",
    });
};

// Registrando o usuário e logando ele

const register = async (req, res) => {
    const { name, email, password } = req.body;

    // Checar se o usuário existe
    const user = await User.findOne({ email });

    if (user) {
        res.status(422).json({ errors: ["Por favor, utilize outro e-mail."] });
        return;
    }

    // Gerar o hash de senha
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Criar usuário
    const newUser = await User.create({
        name,
        email,
        password: passwordHash,
    });

    // Se o usuário fori criado com sucesso, gerar o token:
    if (!newUser) {
        res.status(422).json({
            errors: ["Houve um erro inesperado, por favor tente mais tarde."],
        });
        return;
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id),
    });
};

// Logar usuário

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // Checar se o usuário existe
    if (!user) {
        res.status(404).json({ errors: ["Usuário não encontrado."] });
        return;
    }

    // Checar se a senha fecha
    if (!(await bcrypt.compare(password, user.password))) {
        res.status(422).json({ errors: ["Senha inválida."] });
        return;
    }

    // Retorna o usuário com o token
    res.status(201).json({
        _id: user._id,
        token: generateToken(user._id),
    });
};

// Pegar o usuário logado atualmente
const getCurrentUser = async (req, res) => {
    const user = req.user;

    res.status(200).json(user);
};

// Update do usuário

const update = async (req, res) => {
    const { name, password } = req.body;

    const reqUser = req.user;
    const user = await User.findById(
        mongoose.Types.ObjectId(reqUser._id)
    ).select("-password");

    if (name) {
        user.name = name;
    }

    if (password) {
        //Gera o password hash
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(passoword, salt);

        user.password = passwordHash;
    }

    await user.save();

    res.status(200).json(user);
};

// Pegar o usuário pelo id
const getUserbyId = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(mongoose.Types.ObjectId(id)).select(
        "-password"
    );

    // Checando se o usuário existe
    if (!user) {
        res.status(404).json({ errors: ["Usuário não encontrado."] });
        return;
    }

    res.status(200).json(user);
};

module.exports = {
    register,
    login,
    getCurrentUser,
    update,
    getUserbyId,
    
};
