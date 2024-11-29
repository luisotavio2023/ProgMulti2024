const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Professores } = require('../models');
require('dotenv').config();

const authService = {
    async registrar({ nome, email, senha, nivel, foto, datanasc, cpf, salario, formacao }) {
        // Criptografando a senha antes de salvar
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        // Criando o novo registro de professor
        return Professores.create({
            nome,
            email,
            senha: senhaCriptografada,
            foto,        
            datanasc,    
            cpf,        
            salario,     
            formacao,   
            nivel        
        });
    },

    async login(email, senha) {
        const professor = await Usuarios.findOne({ where: { email } });
        if (!professor) throw new Error('Email e/ou senha inválidos!');

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) throw new Error('Email e/ou senha inválidos!');

        const token = jwt.sign({ id: usuario.id, email: usuario.nome }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }
};

module.exports = authService;

