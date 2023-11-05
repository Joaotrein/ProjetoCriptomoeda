const express = require("express");
const router = express.Router();

// Importando o roteador de usuários definido em "UserRoutes.js"
const userRouter = require("./UserRoutes")

// Usando o roteador de usuários para a rota "/api/users"
router.use("/api/users", userRouter);

// Rota de teste, que envia uma mensagem de "A API está funcionando!" quando a raiz ("/") é acessada
router.get("/", (req, res) => {
    res.send("A API está funcionando!");
});

// Exportando o roteador para ser utilizado na sua aplicação principal
module.exports = router;
