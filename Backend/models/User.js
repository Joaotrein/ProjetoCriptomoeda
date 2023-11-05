const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");
const { Schema } = mogoose;

// Definindo o schema do usuário
const userSchema = new Schema(
    {
        // Definindo as atribuições da Collection (ou tabela, em termos SQL)
        name: String, // Nome do usuário, armazenado como uma string
        email: String, // Endereço de e-mail do usuário, armazenado como uma string
        password: String, // Senha do usuário, armazenada como uma string
    },
    {
        // Configurando as opções do schema
        timestamps: true, // Habilita o registro automático de data e hora de criação e atualização de documentos
    }
);

// Criando um modelo de dados do MongoDB com o nome "User" e baseado no schema definido
const User = mogoose.model("User", userSchema);

// Exportando o modelo de usuário para ser usado em outras partes do aplicativo
module.exports = User;
