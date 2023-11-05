const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Importa o modelo de usuário
const bcrypt = require("bcrypt"); // Importa a biblioteca bcrypt para verificar senhas criptografadas

// Rota para excluir uma conta de usuário
router.delete("/deleteAccount", async (req, res) => {
  const { email, password } = req.body; // Extrai o email e a senha do corpo da solicitação

  try {
    // Encontre o usuário com o e-mail fornecido no banco de dados
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado." }); // Se o usuário não for encontrado, retorne um status 401 e uma mensagem de erro
    }

    // Verifique a senha para autenticar a exclusão da conta
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Senha incorreta." }); // Se a senha estiver incorreta, retorne um status 401 e uma mensagem de erro
    }

    // Exclua a conta de usuário
    await User.findOneAndDelete({ email });

    res.status(200).json({ message: "Conta de usuário excluída com sucesso." }); // Se a exclusão for bem-sucedida, retorne um status 200 e uma mensagem de sucesso
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao excluir a conta de usuário." }); // Se ocorrer um erro durante o processo, retorne um status 500 e uma mensagem de erro
  }
});

module.exports = router;
