const express = require("express")
const router = express.Router()
const AlunoController = require("../controllers/AlunoController")


const alunoController = new AlunoController()

router.get("/alunos", alunoController.ListarAlunos)

router.post("/aluno", alunoController.CadastrarAluno)

router.put("/aluno/:RA", alunoController.EditarAluno)

router.delete("/aluno/:RA", alunoController.ExcluirAluno)


module.exports = router;