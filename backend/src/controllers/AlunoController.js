const { Op } = require("sequelize");
const Aluno = require("../models/Aluno")


class UserController{

    static async ListarAlunos(req,res){
        const alunos = await Aluno.findAll();
        res.status(200).json({
            alunos
        }) 
    }

    static async ListarAlunoPorNome(req,res){

        const nomeAluno = req.params.nomeAluno;

        const alunos = await Aluno.findAll({
            where:{
                nome: {[Op.like] : `${nomeAluno}%`}
            }
        })

        return res.status(200).json({"message":"Alunos encontrados:", alunos})
    }


    static async ListarAlunoPorRA(req,res){

        const RA = req.params.RA;

        const aluno = await Aluno.findOne({
            where:{
                RA: RA
            }
        })

        return res.status(200).json(aluno)
    }


    static async CadastrarAluno(req,res){
        const {nome, email, RA, CPF} = req.body;

        const aluno = Aluno.create({
            nome: nome,
            email: email,
            RA: RA,
            CPF: CPF
        })

        res.status(200).json({
            "Aluno Cadastrado!": aluno
        })

    }

    static async EditarAluno(req,res){
        const RA = req.params.RA;
        const {nome, email} = req.body;
        
        await Aluno.update({
            nome: nome,
            email:email,   
        }, {where: {RA: RA}})

        res.status(200).json({message: "Aluno Atualizado!"})
    }

    static async ExcluirAluno(req,res){
        const RA = req.params.RA;

        await Aluno.destroy({where:{RA:RA}})

        res.status(200).json({message: "Aluno Excluído!"})
    }


    
}

module.exports = UserController;