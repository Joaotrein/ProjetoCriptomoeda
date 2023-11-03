const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");
const { Schema } = mogoose;

const userSchema = new Schema(
    {
        //Criando as atribuições da Collection
        name: String,
        email: String,
        password: String,
    },
    {
        //Marcando a hora que o usuário é criado e quando é atualizado
        timestamps: true,
    }
);

const User = mogoose.model("User", userSchema);

module.exports = User;
