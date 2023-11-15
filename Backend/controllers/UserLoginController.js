const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Rota de login
router.post("/login", async (req, res) => {
    const { email, password } = req.body; 

    try {
        const user = await User.findOne({ email });

        if (!user) {
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
        }

        // Gere um token JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro no processo de login." });
    }
});

module.exports = router;
