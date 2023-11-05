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

module.exports = validate; // Exporta o middleware

// Este middleware é usado para validar solicitações com base nas regras definidas pelos validadores do express-validator. 
// Primeiro, ele verifica os resultados da validação, e se não houver erros, permite que a solicitação avance para o próximo middleware na cadeia.
// Se houver erros de validação, ele extrai as mensagens de erro e retorna uma resposta JSON com esses erros e um status 422 (Unprocessable Entity), 
// indicando que a solicitação não pode ser processada devido a problemas de validação. É uma ferramenta valiosa para garantir 
// que as solicitações atendam aos critérios de validação antes de prosseguir com o processamento das rotas.
