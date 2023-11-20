import { useContext } from "react";
import { useMutation } from "react-query";
import { AlunoContext } from "../contexts/AlunoContext";
import axios from "axios";
import { useParams } from "react-router-dom";


const useUpdateAluno = (inputNome,inputEmail)=>{

    const {ra} = useParams();

    console.log(inputNome)

    const mutation = useMutation({
        mutationFn : async()=>{
            return axios.put(`http://localhost:8000/aluno/${ra}`, {
                nome:inputNome,
                email:inputEmail,
            })
            .then((res)=>console.log(res.data))
        }
    })

    return mutation

}


export default useUpdateAluno;