const sequelize = require("../database/conn")
const {DataTypes} = require("sequelize")


const Aluno = sequelize.define('Aluno', {
    nome:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    RA:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true
    },
    CPF:{
        type:DataTypes.BIGINT,
        unique:true
    }
})

module.exports = Aluno