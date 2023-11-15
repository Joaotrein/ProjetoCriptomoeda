const { validationResult } = require("express-validator");

// Middleware de validação
const validate = (req, res, next) => {
    const errors = validationResult(req); // Obtém os resultados da validação com base nas regras definidas

    if (errors.isEmpty()) {
        return next(); // Se não houver erros de validação, avance para o próximo middleware
    }

    const extractedErrors = [];

    errors.array().map((err) => extractedErrors.push(err.msg)); // Extrai as mensagens de erro dos resultados de validação

    return res.status(422).json({
        errors: extractedErrors, // Retorna um JSON com as mensagens de erro de validação
    });
};

module.exports = validate;  