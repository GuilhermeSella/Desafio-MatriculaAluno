const express = require("express")
const router = require("../src/routes/router")

const app = express()
const port = 8000

app.use(express.json())
app.use("", router)

app.listen(port, (error)=>{
    if(error) console.log(error)

    console.log("Servidor rodando porta:" + port)
})