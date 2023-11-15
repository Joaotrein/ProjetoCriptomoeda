const mogoose = require("mongoose");
const { Schema } = mogoose;

// Definindo o schema do usuário
const userSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
        verifytoken: String, // Adiciona o campo para armazenar o token
    },
    {
        timestamps: true,
    }
);

const User = mogoose.model("User", userSchema);

module.exports = User;
