// models/Usuarios.js
module.exports = (sequelize, DataTypes) => {
    const Professores = sequelize.define('Professores', {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Foto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      salario: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      formacao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nivel: {
        type: DataTypes.ENUM('Administrador', 'Professor'),
        defaultValue: 'Professor',
      },
    });
  
    return Professores;
  };
  