const express = require("express")
const sequelize = require("../src/database/conn")
const router = require("../src/routes/router")
const cors = require("cors")

const app = express()
const port = 8000

app.use(express.json())
app.use("", router)
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
app.use(cors(corsOptions))




try{
    sequelize.authenticate()
    console.log("Conectado ao sequelize!")
} catch(error){
    console.log(error)
}

app.listen(port, (error)=>{
    if(error) console.log(error)

    console.log("Servidor rodando porta:" + port)
})