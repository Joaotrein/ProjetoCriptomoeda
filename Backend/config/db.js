// Importando o módulo dotenv para carregar variáveis de ambiente do arquivo .env
require("dotenv").config();

// Importando a biblioteca mongoose para se conectar ao MongoDB
const mongoose = require("mongoose");

// Importando as variáveis de ambiente definidas no arquivo .env
const IP = process.env.IP_DB; // Endereço do MongoDB
const CollectionDb = process.env.CollectioDbName; // Nome da coleção do banco de dados

// Função para conectar com o banco de dados
const connectToDatabase = async () => {
    try {
        // Tentativa de conexão com o MongoDB usando o endereço IP e nome da coleção
        const dbConn = await mongoose.connect(
            `mongodb://${IP}/${CollectionDb}`
        );
        console.log("O Banco de dados foi conectado!");
        return dbConn;
    } catch (error) {
        console.error("Houve um erro:", error); // Registra e exibe um erro se a conexão falhar
        throw error;
    }
};

// Invocando a função para conectar ao banco de dados
connectToDatabase();

module.exports = connectToDatabase; // Exporta a função de conexão com o banco de dados
