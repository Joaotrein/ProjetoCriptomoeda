const express = require("express");
const router = express.Router();

//Controller
const {
    register,
    login,
    getCurrentUser,
    update,
    getUserbyId,
} = require("../controllers/UserController");

//Middlewares

const validate = require("../middlewares/handleValidation");
const {
    userCreateValidation,
    loginValitation,
    userUpdateValidation,
} = require("../middlewares/userValidations");
const authGuard = require("../middlewares/authGuard");

//Routes
router.post("/register", userCreateValidation(), validate, register); // Aqui o validate esta fazendo o intermediario entre o banco e o register, assim, caso ocorra qualquer erro com o servidor, o middleware vai validar ele e mostrar para o usuário no front.
router.post("/login", loginValitation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);
router.put("/", authGuard, userUpdateValidation(), validate, update);
router.get("/:id", getUserbyId);

module.exports = router;
