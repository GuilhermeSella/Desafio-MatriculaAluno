const express = require("express")

const router = express.Router()

router.get("/alunos")

router.post("/aluno")

router.put("/aluno")

router.delete("/aluno")


module.exports = router;