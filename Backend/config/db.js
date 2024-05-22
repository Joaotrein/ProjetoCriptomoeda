// Importando o módulo dotenv para carregar variáveis de ambiente do arquivo .env
require("dotenv").config();

// Importando a biblioteca mongoose para se conectar ao MongoDB
const mongoose = require("mongoose");

// Verifica se a variável de ambiente MONGO_URI está definida
if (!process.env.MONGO_URI) {
    console.error("Erro: A variável de ambiente MONGO_URI não está definida.");
    process.exit(1); // Encerra o processo com erro
}

// Função para conectar com o banco de dados
const connectToDatabase = async () => {
    try {
        // Tentativa de conexão com o MongoDB usando a URI do MongoDB Atlas
        const dbConn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("O Banco de dados foi conectado!");
        return dbConn;
    } catch (error) {
        console.error("Houve um erro ao conectar ao banco de dados:", error); // Registra e exibe um erro se a conexão falhar
        throw error;
    }
};

connectToDatabase();

module.exports = connectToDatabase;
