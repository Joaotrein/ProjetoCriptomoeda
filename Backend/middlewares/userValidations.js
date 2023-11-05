const { body } = require("express-validator");

// Função que retorna um conjunto de validações para criar uma conta de usuário
const userCreateValidation = () => {
    return [
        body("name")
            .isString() // Verifica se o campo "name" é uma string
            .withMessage("O nome é obrigatório!") // Define uma mensagem de erro se a validação falhar
            .isLength({ min: 3 }) // Verifica se o campo "name" tem no mínimo 3 caracteres
            .withMessage("O nome precisa ter no mínimo 3 caracteres!"), // Define uma mensagem de erro se a validação falhar
        body("email")
            .isString() // Verifica se o campo "email" é uma string
            .withMessage("O e-mail é obrigatório!") // Define uma mensagem de erro se a validação falhar
            .isEmail() // Verifica se o campo "email" é um endereço de e-mail válido
            .withMessage("Insira um e-mail válido!"), // Define uma mensagem de erro se a validação falhar
        body("password")
            .isString() // Verifica se o campo "password" é uma string
            .withMessage("A senha é obrigatória!") // Define uma mensagem de erro se a validação falhar
            .isLength({ min: 6 }) // Verifica se o campo "password" tem no mínimo 6 caracteres
            .withMessage("A senha precisa ter no mínimo 6 caracteres!"), // Define uma mensagem de erro se a validação falhar
        body("confirmpassword")
            .isString() // Verifica se o campo "confirmpassword" é uma string
            .withMessage("A confirmação de senha é obrigatória!") // Define uma mensagem de erro se a validação falhar
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error("As senhas não são iguais");
                }
                return true;
            }), // Verificação personalizada para comparar a confirmação de senha com a senha
    ];
};

// Função que retorna um conjunto de validações para o login de usuário
const loginValidation = () => {
    return [
        body("email")
            .isString() // Verifica se o campo "email" é uma string
            .withMessage("O e-mail é obrigatório.") // Define uma mensagem de erro se a validação falhar
            .isEmail() // Verifica se o campo "email" é um endereço de e-mail válido
            .withMessage("Insira um e-mail válido."), // Define uma mensagem de erro se a validação falhar
        body("password")
            .isString() // Verifica se o campo "password" é uma string
            .withMessage("A senha é obrigatória."), // Define uma mensagem de erro se a validação falhar
    ];
};

// Função que retorna um conjunto de validações para atualizar os dados da conta de usuário
const userUpdateValidation = () => {
    return [
        body("name")
            .optional() // Permite que o campo "name" seja opcional
            .isLength({ min: 3 }) // Verifica se o campo "name" tem no mínimo 3 caracteres
            .withMessage("O nome precisa de pelo menos 3 caracteres."), // Define uma mensagem de erro se a validação falhar
        body("password")
            .optional() // Permite que o campo "password" seja opcional
            .isLength({ min: 5 }) // Verifica se o campo "password" tem no mínimo 5 caracteres
            .withMessage("A senha precisa ter no mínimo 5 caracteres."), // Define uma mensagem de erro se a validação falhar
    ];
};

module.exports = {
    userCreateValidation,
    loginValidation, // Exporta as funções de validação para serem usadas em rotas
    userUpdateValidation,
};
