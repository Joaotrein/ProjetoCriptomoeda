require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT;
const app = express();

// Configurando o JSON e o form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Arrumando o CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Conexão com o banco
require("./config/db.js")

// Routes
const router = require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
    console.log(`Aplicativo rodando na porta ${port}`);
});
