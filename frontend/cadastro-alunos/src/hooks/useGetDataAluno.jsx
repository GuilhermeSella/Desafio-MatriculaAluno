import { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { AlunoContext } from "../contexts/AlunoContext";
import axios from "axios";

const useGetDataAluno = (ra)=>{

    const [nome,setNome] = useState("")
    const [cpf,setCpf] = useState("")
    const [email, setEmail] = useState("")

    const {data,error} = useQuery("getDataAluno", async()=>{

        try {
            const response = await axios.get(`http://localhost:8000/aluno/${ra}`);
            console.log(response.data.email)
            const { nome, CPF, email } = response.data;
           
            setNome(nome);
            setCpf(CPF);
            setEmail(email);

            return response.data;
        } catch (error) {
            throw new Error("Erro ao obter dados do aluno");
        }
        
    })

    
    
    return {nome,email,cpf, setEmail, setNome}

}

export default useGetDataAluno;