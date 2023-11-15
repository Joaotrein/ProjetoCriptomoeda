const express = require("express");
const router = express.Router();
const userRouter = require("./UserRoutes")

// Usando o roteador de usuários para a rota "/api/users"
router.use("/api/users", userRouter);

// Rota de teste, que envia uma mensagem de "A API está funcionando!" quando a raiz ("/") é acessada
router.get("/teste", (req, res) => {
    res.send("A API está funcionando!");
});

module.exports = router;
