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
        type: DataTypes.BLOB,
        allowNull: false,
        unique: false,
      },
      data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      salario: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: true,
      },
      formacao: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      nivel: {
        type: DataTypes.ENUM('Administrador', 'Professor'),
        defaultValue: 'Professor',
      },
    });
  
    return Professores;
  };
  