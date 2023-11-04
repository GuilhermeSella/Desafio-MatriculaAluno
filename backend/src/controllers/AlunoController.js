const Aluno = require("../models/Aluno")


class UserController{

    async ListarAlunos(req,res){
        const alunos = await Aluno.findAll();
        res.status(200).json({
            alunos
        }) 
    }

    async CadastrarAluno(req,res){
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

    async EditarAluno(req,res){
        const RA = req.params.RA;
        const {nome, email} = req.body;

        await Aluno.update({
            nome: nome,
            email:email,   
        }, {where: {RA: RA}})

        res.status(200).json({message: "Aluno Atualizado!"})
    }

    async ExcluirAluno(req,res){
        const RA = req.params.RA;

        await Aluno.destroy({where:{RA:RA}})

        res.status(200).json({message: "Aluno Excluído!"})
    }


    
}

module.exports = UserController;