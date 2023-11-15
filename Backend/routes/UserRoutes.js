const express = require("express");
const router = express.Router();
const loginController = require("../controllers/UserLoginController");
const createAccountController = require("../controllers/UserRegister");
const UserSendEmailController = require("../controllers/UserSendEmail");
const {
    userCreateValidation,
    loginValidation,
    userForgotPassword,
} = require("../middlewares/userValidations");

const validate = require("../middlewares/handleValidation");

router.post("/register", userCreateValidation(), validate, createAccountController);
router.post("/login", loginValidation(), validate, loginController);
router.post("/sendpasswordlink", userForgotPassword(), validate, UserSendEmailController);

router.post("/:id/:token", userForgotPassword(), UserSendEmailController);

router.get("/forgotpassword/:id/:token", userForgotPassword(), UserSendEmailController);

module.exports = router;
