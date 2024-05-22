require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.use(
    cors({
        origin: "https://projetocriptomoeda.onrender.com",
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
        credentials: true,
    })
);


require("./config/db.js");

const router = require("./routes/Router.js");
app.use(router);

app.listen(port, () => {
    console.log(`Aplicativo rodando na porta ${port}`);
});
