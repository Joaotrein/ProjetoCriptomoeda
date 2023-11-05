const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Importa o modelo de usuário
const bcrypt = require("bcrypt"); // Importa a biblioteca bcrypt para verificar senhas criptografadas

// Rota para atualizar dados da conta de usuário
router.put("/updateInformations", async (req, res) => {
    const { email, password, newData } = req.body; // Extrai o email, senha e os novos dados do corpo da solicitação

    try {
        // Encontre o usuário com o e-mail fornecido no banco de dados
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Usuário não encontrado." }); // Se o usuário não for encontrado, retorne um status 401 e uma mensagem de erro
        }

        // Verifique a senha para autenticar a atualização dos dados
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Senha incorreta." }); // Se a senha estiver incorreta, retorne um status 401 e uma mensagem de erro
        }

        // Atualize os dados da conta de usuário com os novos dados fornecidos
        await User.updateOne({ email }, { $set: newData });

        res.status(200).json({
            message: "Dados da conta de usuário atualizados com sucesso.",
        }); // Se a atualização dos dados for bem-sucedida, retorne um status 200 e uma mensagem de sucesso
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Erro ao atualizar os dados da conta de usuário.",
        }); // Se ocorrer um erro durante o processo, retorne um status 500 e uma mensagem de erro
    }
});

module.exports = router;
