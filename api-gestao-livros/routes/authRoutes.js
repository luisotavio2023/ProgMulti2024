const express = require('express');
const authService = require('../services/authService');
const router = express.Router();

router.post('/cadastrar', async (req, res) => {
    const { nome, email, senha, nivel, foto, dataNasc, cpf, salario, formacao } = req.body;

    // Validação básica para garantir que campos obrigatórios não estejam vazios
    if (!email || !senha || !nome || !cpf) {
        return res.status(400).json({ message: 'Informe todos os dados obrigatórios!' });
    }

    try {
        // Lógica para registrar o novo usuário no banco de dados
        await authService.registrar({
            nome,
            email,
            senha,
            nivel,
            foto,
            dataNasc,
            cpf,
            salario,
            formacao
        });

        res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
    } catch (error) {
        console.error(error);  // Exibir erro no servidor para depuração
        res.status(500).json({ message: 'Erro ao cadastrar o usuário!' });
    }
});


router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const token = await authService.login(email, senha);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

