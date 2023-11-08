import { useContext } from "react";
import { AlunoContext } from "../contexts/AlunoContext";
import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useSubmitAluno = ()=>{

    const {nomeAluno, emailAluno, raAluno, cpfAluno} = useContext(AlunoContext);

    const mutation = useMutation({
        mutationFn : async()=>{
            return axios.post("http://localhost:8000/aluno", {
                nome:nomeAluno.current.value,
                email:emailAluno.current.value,
                RA: raAluno.current.value,
                CPF: cpfAluno.current.value
            })
            .then((res)=>console.log(res.data))
        }
    })


    return {mutation}

}

export default useSubmitAluno;