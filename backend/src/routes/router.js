const express = require("express")
const router = express.Router()
const AlunoController = require("../controllers/AlunoController")




router.get("/alunos", AlunoController.ListarAlunos)

router.get("/aluno/:nomeAluno", AlunoController.ListarAlunoPorNome )

router.post("/aluno", AlunoController.CadastrarAluno)

router.put("/aluno/:RA", AlunoController.EditarAluno)

router.delete("/aluno/:RA", AlunoController.ExcluirAluno)


module.exports = router;