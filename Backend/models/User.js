const mogoose = require("mongoose");
const { Schema } = mogoose;

// Definindo o schema do usuário
const userSchema = new Schema(
    {
        name: String, 
        email: String, 
        password: String, 
    },
    {
        timestamps: true, // Habilita o registro automático de data e hora de criação e atualização de documentos
    }
);

const User = mogoose.model("User", userSchema);

module.exports = User;
