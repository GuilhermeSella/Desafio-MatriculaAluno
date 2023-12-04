import { useContext } from "react";
import { AlunoContext } from "../contexts/AlunoContext";
import { useMutation, useQuery } from "react-query";
import { toast, ToastContainer } from 'react-toastify';
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
            .then( (res)=>{
                toast.success("Cadastrado!")
                nomeAluno.current.value = ""
                emailAluno.current.value = ""
                raAluno.current.value = ""
                cpfAluno.current.value = ""
            })
        }
    })


    return {mutation}

}

export default useSubmitAluno;