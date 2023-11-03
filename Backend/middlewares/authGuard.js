const User = require("../models/User");

const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // => Pegar apenas o que nos interessa, no caso o token

    // Checa se o header tem token
    if (!token) return res.status(401).json({ errors: ["Acesso negado!"] });

    // Checa se o token é válido
    try {
        const verified = jwt.verify(token, jwtSecret);

        req.user = await User.findById(verified.id).select("-password");

        next();
    } catch (err) {
        res.status(400).json({ errors: ["O Token é inválido!"] });
    }
};

module.exports = authGuard;
