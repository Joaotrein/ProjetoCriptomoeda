const express = require("express");
const router = express.Router();
const loginController = require("../controllers/UserLoginController");
const createAccountController = require("../controllers/UserRegister");
const updateController = require("../controllers/UserUpdate");
const deleteAccountController = require("../controllers/UserDelete");
const UserForgotPasswordController = require("../controllers/UserForgotPassword");
// Importando funções de validação para as rotas
const {
    userCreateValidation,
    loginValidation,
    userUpdateValidation,
    userForgotPassword
} = require("../middlewares/userValidations");

// Importando o middleware de validação customizado
const validate = require("../middlewares/handleValidation");

// Rota para criar uma conta de usuário com validação
router.post("/register", userCreateValidation(), validate, createAccountController);

// Rota para autenticar um usuário com validação
router.post("/login", loginValidation(), validate, loginController);

// Rota para atualizar dados da conta de usuário com validação
router.put("/updateInformations", userUpdateValidation(), updateController);

// Rota para excluir uma conta de usuário
router.delete("/deleteAccount", deleteAccountController);

router.post("/forgotPassword", userForgotPassword(), UserForgotPasswordController);


// Exportando o roteador para ser utilizado em outros lugares da aplicação
module.exports = router;
