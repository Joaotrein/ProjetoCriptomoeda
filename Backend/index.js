// Carrega as variáveis de ambiente definidas no arquivo .env
require('dotenv').config();

// Importa as bibliotecas necessárias
const express = require('express');
const cors = require('cors');
const app = express();

// Configura o suporte a JSON e dados de formulário no Express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configura o CORS para permitir solicitações da origem definida no arquivo .env
const port = process.env.PORT || 3000; // Usará a porta 3000 se a variável de ambiente PORT não estiver definida

// Configura o CORS com a origem (origin) definida no arquivo .env
app.use(cors({ credentials: true, origin: `http://localhost:${port}` }));

// Conecta ao banco de dados MongoDB com as configurações definidas em './config/db.js'
require('./config/db.js');

// Define as rotas da aplicação
const router = require('./routes/Router.js');
app.use(router);

// Inicia o servidor Express na porta definida
app.listen(port, () => {
    console.log(`Aplicativo rodando na porta ${port}`);
});
